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
    this.onBackBtnClick = this.onBackBtnClick.bind(this);
  }

  onProductClick(event) {
    const productId = event.target.dataset.productid;
    const product = this.props.products[productId]
    this.setState({
      showProduct: product,
    })
  }

  onBackBtnClick() {
    this.setState({
      showProduct: false,
    })
  }

  render() {
    const { showProduct } = this.state 

    return (
      <section className="Shop">
        <div className="container">
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
                onBackBtnClick={this.onBackBtnClick}
              /> 
          }
        </div>
      </section>
    )
  }
}

export default Shop;
