import React from 'react';
import Loading from './Loading';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = this.timeout.bind(this);
    this.state = {
      listaDeProdutos: [],
      loading: false,
    };
  }

  // componentDidMount() {
  //   this.setState({

  //   });
  // }

  timeout = () => {
    const time = 2000;
    setTimeout(() => this.setState(
      { listaDeProdutos: [1, 2],
        loading: false },
    ), time);
  }

  render() {
    const { listaDeProdutos, loading } = this.state;
    // this.timeout();
    if (loading) return <Loading />;
    if (listaDeProdutos.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>{ `A lista de produtos é: ${listaDeProdutos}` }</div>
    );
  }
}

export default Carrinho;
