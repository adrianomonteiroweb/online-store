import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BotoesDosProdutos from './BotoesDosProdutos';
import './ProductCartCard.css';

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
        className="produto"
        data-testid="product"
      >
        <div>
          <h4 data-testid="shopping-cart-product-name">
            {title}
          </h4>
          <h5>
            <span className="price-tag-simbol">R$</span>
            {price.toFixed(2)}
          </h5>
          <img src={ thumbnail } alt={ `Imagem do produto${title}` } width="100px" />
          <Link
            className="btn btn-outline-primary"
            data-testid="product-detail-link"
            to={ `/${title}/details` }
          >
            Ver detalhes
          </Link>
        </div>
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
