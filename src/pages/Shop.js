import React from 'react';
import Products from '../containers/Products';
import ProductDetails from '../containers/ProductDetails';
import '../styles/pages/Shop.scss';

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      showProduct: null,
    };

    this.onProductClick = this.onProductClick.bind(this);
  }

  onProductClick(event) {
    const productId = event.target.dataset.productid;
    const product = this.props.products[productId]
    this.setState({
      showProduct: product
    })
  }

  render() {
    const { showProduct } = this.state 
    console.log('showProduct',showProduct)

    return (
      <section className="Shop">
        {!showProduct
          ? <Products
              products={this.props.products}
              client={this.props.client}
              addVariantToCart={this.props.addVariantToCart}
              onProductClick={this.onProductClick}
            /> 
          : <ProductDetails
              product={showProduct}
              client={this.props.client}
              addVariantToCart={this.props.addVariantToCart}
            /> 
        }
      </section>
    )
  }
}

export default Shop;
