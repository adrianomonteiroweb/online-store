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
                    <Link data-testid="shopping-cart-button" to="/carrinho"><img src="https://w7.pngwing.com/pngs/15/271/png-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png" alt="Carrinho de Compras" width="80px" /></Link>
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
