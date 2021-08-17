import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import BotoesDosProdutos from './BotoesDosProdutos';

class ProductCartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberOfItems: 1,
    };
  }

  onClickIncress = () => {
    const { product: { quantidadeMax } } = this.props;
    const { NumberOfItems } = this.state;
    if (NumberOfItems < quantidadeMax) {
      this.setState((previusState) => (
        { NumberOfItems: previusState.NumberOfItems + 1 }));
    }
  }

  onClickDecress = () => {
    const { NumberOfItems } = this.state;
    if (NumberOfItems > 1) {
      this.setState((previusState) => (
        { NumberOfItems: previusState.NumberOfItems - 1 }));
    }
  }

  render() {
    const { NumberOfItems } = this.state;
    const { product: { title, price, thumbnail, id }, funcRemover } = this.props;

    return (
      <div
        data-testid="product"
        style={ {
          maxWidth: '30%',
        } }
      >
        <h4 data-testid="shopping-cart-product-name">
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
        <BotoesDosProdutos
          id={ id }
          funcRemover={ funcRemover }
          onClickIncress={ this.onClickIncress }
          onClickDecress={ this.onClickDecress }
          NumberOfItems={ NumberOfItems }
        />
      </div>
    );
  }
}

ProductCartCard.propTypes = {
  funcRemover: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantidadeMax: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCartCard;
