import React from 'react';
import PropTypes from 'prop-types';

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
