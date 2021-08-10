import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import { SearchBar, Carrinho, LinkParaCarrinho,
  CategoriesContainer } from './Componentes/index';
import ListProducts from './Componentes/ListProducts';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchQueryCategory = this.fetchQueryCategory.bind(this);
    this.state = {
      search: '',
      categories: [],
      categorySelected: [],
    };
    this.fetch();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: [target.value],
    });
  }

  handleClick({ target }) {
    const { id, value } = target;
    this.fetchQueryCategory(id, value);
  }

  buttonClick(e) {
    e.preventDefault();
    const { search } = this.state;
    this.fetchQueryCategory('', search);
  }

  async fetch() {
    const promise = await getCategories();
    this.setState({ categories: Object.values(promise) });
  }

  async fetchQueryCategory(categoryID, query) {
    const promise = await getProductsFromCategoryAndQuery(categoryID, query);
    this.setState({ categorySelected: promise.results });
  }

  render() {
    const { search, categories, categorySelected } = this.state;

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
                    <button
                      data-testid="query-button"
                      type="submit"
                      onClick={
                        (e) => this.buttonClick(e)
                      }
                    >
                      Search

                    </button>
                    <LinkParaCarrinho />
                  </div>
                  <p data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                  <div className="row">
                    <CategoriesContainer
                      handleClick={ this.handleClick }
                      categories={ categories }
                    />
                    <ListProducts products={ categorySelected } />
                  </div>
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
