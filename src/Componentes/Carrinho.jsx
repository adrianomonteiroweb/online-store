import React from 'react';
import Loading from './Loading';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDeProdutos: [],
      loading: false,
    };
  }

  componentDidMount() {
    getProductsFromCategoryAndQuery('', 'computador')
      .then((data) => {
        this.setState({ listaDeProdutos: [...data.results] });
      });
  }

  render() {
    const { listaDeProdutos, loading } = this.state;
    console.log(listaDeProdutos);
    if (loading) return <Loading />;
    if (listaDeProdutos.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <ProductCard product={ listaDeProdutos[0] } />
      </div>
    );
  }
}

export default Carrinho;
