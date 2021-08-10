import React from 'react';
import ProductCard from './ProductCard';
import './ListProducts.css';

class ListProducts extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <p>Produtos</p>
        <section className="listOfProducs">
          {products
            .map((obj) => (
              <ProductCard key={ obj.id } product={ obj } />
            ))}
        </section>
      </div>
    );
  }
}

// ListProducts.propTypes = {
//   ProductCard: propTypes.arrayOf(propTypes.).isRequired,
// };

export default ListProducts;
