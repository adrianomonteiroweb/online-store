import React from 'react';
import { Link } from 'react-router-dom';

class LinkParaCarrinho extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/carrinho">
        <img
          src="https://media.gettyimages.com/vectors/full-cart-shopping-and-retail-thin-line-icon-set-vector-id1084146520?s=612x612"
          alt="Carrinho de Compras"
          width="80px"
        />
      </Link>
    );
  }
}

export default LinkParaCarrinho;
