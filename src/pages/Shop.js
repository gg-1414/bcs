import React from 'react';
import Products from '../containers/Products';

class Shop extends React.Component {
  render() {
    return (
      <div className="Shop">
        <Products
          products={this.props.products}
          client={this.props.client}
          addVariantToCart={this.props.addVariantToCart}
        />
      </div>
    )
  }
}

export default Shop;
