import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <h>
          Preço do Produto
          {price}
        </h>
        <img src={ thumbnail } alt={ `Imagem do produto${title}` } width="100px" />
        <Link data-testid="product-detail-link" to={ `/${title}/details` }>
          Ver detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ProductCard;
