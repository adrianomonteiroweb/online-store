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
          src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/%C3%8Dcone-Carrinho-de-Compras-PNG.png"
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
