import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ListProducts.css';

class ListProducts extends React.Component {
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
              <ProductCard key={ obj.id } product={ obj } />
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
