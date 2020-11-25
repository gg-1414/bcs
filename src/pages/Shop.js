import React from 'react';
import Products from '../containers/Products';
import '../styles/pages/Shop.scss';

class Shop extends React.Component {
  render() {
    return (
      <section className="Shop">
        <Products
          products={this.props.products}
          client={this.props.client}
          addVariantToCart={this.props.addVariantToCart}
        />
      </section>
    )
  }
}

export default Shop;
