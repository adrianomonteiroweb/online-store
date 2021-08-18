import React from 'react';
import { Link } from 'react-router-dom';
import './LinkParaCarrinho.css';
import propTypes from 'prop-types';

class LinkParaCarrinho extends React.Component {
  render() {
    const { view: NumberOfItems } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/carrinho"
      >
        <img
          src="https://media.gettyimages.com/vectors/full-cart-shopping-and-retail-thin-line-icon-set-vector-id1084146520?s=612x612"
          alt="Carrinho de Compras"
          width="80px"
        />
        <div data-testid="shopping-cart-size" className="preview">{NumberOfItems}</div>
      </Link>

    );
  }
}

LinkParaCarrinho.propTypes = {
  view: propTypes.number.isRequired,
};

export default LinkParaCarrinho;
