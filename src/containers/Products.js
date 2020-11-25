import React, { Component } from 'react';
import Product from '../components/Product';

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <div className="Product-wrapper">
        <div className="container">
          {products}
          {products}
        </div>
      </div>
    );
  }
}

export default Products;
