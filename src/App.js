import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import Carrinho from './Carrinho';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      search: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: [target.value],
    });
  }

  render() {
    const { search } = this.state;
    return (
      <main>

        <BrowserRouter>
          <Switch>
            <Route path="/carrinho" component={ Carrinho } />
            <Route
              exact
              path="/"
              render={ () => (
                <div className="App">
                  <div className="search-cart">
                    <SearchBar
                      handleChange={ this.handleChange }
                      value={ search }
                    />
                    <Link data-testid="shopping-cart-button" to="/carrinho"><img src="https://media.gettyimages.com/vectors/full-cart-shopping-and-retail-thin-line-icon-set-vector-id1084146520?s=612x612" alt="Carrinho de Compras" width="80px" /></Link>
                  </div>

                  <p data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                </div>) }
            />
            <Route exact path="*" render={ () => (<p>Not Found</p>) } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
