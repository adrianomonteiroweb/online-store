import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div
        data-testid="product"
        style={ {
          maxWidth: '30%',
        } }
      >
        <h4>
          Nome Do Produto:
          {title}
        </h4>
        <h5>
          Preço do Produto
          {price}
        </h5>
        <img src={ thumbnail } alt={ `Imagem do produto${title}` } width="100px" />
        <Link data-testid="product-detail-link" to={ `/${title}/details` }>
          Ver detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
