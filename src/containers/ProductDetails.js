import React, { Component } from 'react';
import VariantSelector from '../components/VariantSelector';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });

    this.state = { 
      selectedOptions: defaultOptionValues,
      activeIndex: 0,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  getAllIndexes(arr, val) {
    console.log('arr',arr)
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
      if (arr[i] === val)
        indexes.push(i);
    return indexes;
  }

  getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
      activeIndex: parseInt(target.dataset.id)
    });
  }

  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
          activeIndex={this.state.activeIndex}
        />
      );
    });

    let description1, description2, details;

    const productInfoKeys = 'Description_1|Description_2|Details'.split('|')

    productInfoKeys.forEach(key => {
      const splitKey = `~*~${key}~*~`
      if (this.props.product.description.indexOf('---')) {
        if (key === 'Description_1') {
          const description1Arr = this.props.product.description.split(splitKey)
          description1 = description1Arr[description1Arr.length - 1].split('---')[0]
        } else if (key === 'Description_2') {
          const description2Arr = this.props.product.description.split(splitKey)
          description2 = description2Arr[description2Arr.length - 1].split('---')[0]
        } else if (key === 'Details') {
          const detailsArr = this.props.product.description.split(splitKey)
          details = detailsArr[detailsArr.length - 1].split('---')[0]
        }
      }
    })

    return (
      <div className="Product__details">
        {this.props.product.images.length 
          ? <img src={variantImage.src} alt={`${this.props.product.title} product shot`}/> 
          : null
        }

        <h5 className="Product__title">{this.props.product.title}</h5>
        <p className="Product__price">${variant.price}</p>
        <p>{description1}</p>
        <p>{description2}</p>

        {variantSelectors}

        <button 
          className="Product__buy button" 
          onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}
        >
          ADD TO BAG
        </button>
      </div>
    )
  }
}

export default ProductDetails; 
