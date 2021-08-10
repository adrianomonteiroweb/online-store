import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import { SearchBar, Carrinho, LinkParaCarrinho,
  CategoriesContainer } from './Componentes/index';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      search: '',
      categories: [],
    };
    this.fetch();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: [target.value],
    });
  }

  async fetch() {
    const promise = await getCategories();
    this.setState({ categories: Object.values(promise) });
  }

  render() {
    const { search, categories } = this.state;

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
                  <CategoriesContainer categories={ categories } />
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
