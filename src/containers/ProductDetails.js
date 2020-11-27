import React, { Component } from 'react';
import Carousel from 'react-image-carousel';
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
      activeContent: 'description',
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
    if (searchStrLen === 0) {
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

  handleContentToggle() {
    const newState = this.state.activeContent === 'description' ? 'details' : 'description'
    this.setState({
      activeContent: newState
    })
  }

  render() {
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
    })

    const { activeContent } = this.state
    const productDescription = this.props.product.descriptionHtml 
    const splitDesc = productDescription.split("<ul>") || productDescription.split('<ul data-mce-fragment="1">')
    const description = splitDesc[0]
    const details = splitDesc[1] ? splitDesc[1].slice(0, splitDesc[1].length - 6) : ''

    const images = this.props.product.images.map(image => {
      return image.src
    })

    return (
      <>
        <div className="Product__details">
          <div className="image-block">
            {this.props.product.images.length
              ? <Carousel images={images} 
                  thumb={true}
                  loop={false}/>
              : null
            }
          </div>
          <div className="content-block">
            <div className="back-button">
            </div>
            <h5 className="Product__title">{this.props.product.title}</h5>
            <p className="Product__price">${variant.price}</p>
            <div className="Product__description">
              <div className="description__details--toggle">
                <button 
                  className={activeContent === 'description' ? 'active' : ''}
                  onClick={this.handleContentToggle.bind(this)}
                >
                  DESCRIPTION
                </button>
                <button 
                  className={activeContent === 'details' ? 'active' : ''}
                  onClick={this.handleContentToggle.bind(this)}
                >
                  DETAILS
                </button>
              </div>
              <div className="content">
                <div 
                  className="description" 
                  dangerouslySetInnerHTML={{ __html: description }}
                  style={{display: activeContent === 'description' ? 'block' : 'none'}}
                />
                <ul 
                  className="details" 
                  dangerouslySetInnerHTML={{ __html: details }}
                  style={{display: activeContent === 'details' ? 'block' : 'none'}}
                />
              </div>
            </div>

            {variantSelectors}

            <button 
              className="Product__buy button" 
              onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}
            >
              ADD TO BAG
            </button>
            <button className="back-button" onClick={this.props.onBackBtnClick}>
              BACK TO ALL PRODUCTS
            </button>  
          </div>
        </div>
      </>
    )
  }
}

export default ProductDetails; 
