import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ListProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      // listProduct: [],
    };
    // this.AddToCart = this.AddToCart.bind(this);
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <p>Produtos</p>
        <section
          className="listOfProducs"
        >
          {products
            .map((obj) => (
              <ProductCard key={ obj.id } product={ obj } AddToCart={ this.AddToCart } />
              // <ProductCard key={ obj.id } product={ obj } />
            ))}
        </section>
      </div>
    );
  }
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ListProducts;
