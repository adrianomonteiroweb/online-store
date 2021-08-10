import React from 'react';
import './App.css';
import Categories from './Categories';
import SearchBar from './SearchBar';
import { getCategories } from './services/api';

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
        <div className="App" />
        <SearchBar
          handleChange={ this.handleChange }
          value={ search }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <aside className="aside">
          <p>Categorias:</p>
          {categories.map((obj) => <Categories key={ obj.id } category={ obj.name } />)}
        </aside>
      </main>
    );
  }
}

export default App;
