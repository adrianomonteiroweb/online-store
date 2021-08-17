import React from 'react';
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
    const localStorageItems = JSON.parse(localStorage.getItem('items'));

    if (localStorageItems === null || localStorageItems === []) {
      this.setState({ loading: true });
    } else if (localStorage.items.length === 2) {
      this.setState({ loading: true });
    } else {
      this.setState({ listaDeProdutos: [...localStorageItems] });
      this.setState({ loading: false });
    }
  };

  remover = (id) => {
    const { listaDeProdutos } = this.state;
    const findCartItem = listaDeProdutos.find((elemento) => elemento.id === id);

    const localStorageItems = JSON.parse(localStorage.getItem('items'));
    const filtered = localStorageItems.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(filtered));

    const indexARetirar = listaDeProdutos
      .indexOf(findCartItem);
    listaDeProdutos.splice(indexARetirar, 1);
    this.setState({ listaDeProdutos });

    if (localStorage.getItem('items').length === 2) {
      this.setState({ loading: true });
    }
  }

  render() {
    const { listaDeProdutos, loading } = this.state;

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
