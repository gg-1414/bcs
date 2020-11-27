import React, {Component} from 'react';

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
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
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    const { onProductClick } = this.props 

    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]

    return (
      <div className="Product">
        {this.props.product.images.length 
          ? <button 
              onClick={onProductClick} 
              data-productid={this.props.index}
            >
              <img src={variantImage.src} alt={`${this.props.product.title} product shot`}/>
            </button>
          : null
        }
        <button 
          onClick={onProductClick}
          data-productid={this.props.index}
        >
          <h5 className="Product__title">{this.props.product.title}</h5>
        </button>
        <span className="Product__price">${variant.price}</span>
      </div>
    );
  }
}

export default Product;
