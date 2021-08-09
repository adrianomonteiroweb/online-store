import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './Componentes/SearchBar';
import Carrinho from './Componentes/Carrinho';
import LinkParaCarrinho from './Componentes/LinkParaCarrinh';

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
                    <LinkParaCarrinho />
                  </div>
                  <p data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                </div>
              ) }
            />
            <Route exact path="*" render={ () => (<p>Not Found</p>) } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
