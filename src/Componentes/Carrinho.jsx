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

  remover = (id) => {
    const { listaDeProdutos } = this.state;
    const resultadoBusca = listaDeProdutos.find((elemento) => elemento.id === id);
    const indexARetirar = listaDeProdutos
      .indexOf(resultadoBusca);
    listaDeProdutos.splice(indexARetirar, 1);
    this.setState({ listaDeProdutos });
  }

  render() {
    const { listaDeProdutos, loading } = this.state;

    if (loading) return <Loading />;
    if (listaDeProdutos.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>

        <ProductCard product={ listaDeProdutos[0] } />

        {listaDeProdutos.map((produto) => (
          <div key={ produto.id } className="containerItem">
            <ProductCard
              key={ produto.id }
              product={ produto }
              funcRemover={ this.remover }
            />
          </div>))}
      </div>
    );
  }
}

export default Carrinho;
