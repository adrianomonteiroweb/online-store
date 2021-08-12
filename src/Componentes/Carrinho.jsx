import React from 'react';
// import Loading from './Loading';
// import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCartCard from './ProductCartCard';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDeProdutos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getStorageItems();
  }

  getStorageItems = () => {
    // const { listaDeProdutos } = this.state;
    const localStorageItems = JSON.parse(localStorage.getItem('items'));
    if (localStorageItems !== null) {
      this.setState({ listaDeProdutos: [...localStorageItems] });
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
    }
  };

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

    // if (loading) return <Loading />;

    if (loading) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        {listaDeProdutos.map((produto) => (
          <div key={ produto.id } className="containerItem">
            <ProductCartCard
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
