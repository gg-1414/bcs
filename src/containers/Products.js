import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

class Products extends Component {
  render() {
    let products = this.props.products.map((product, index) => {
      return (
        <ProductCard
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          onProductClick={this.props.onProductClick}
          index={index}
        />
      );
    });

    return (
      <div className="Product-wrapper">
        <div className="container">
          {products}
        </div>
      </div>
    );
  }
}

export default Products;
