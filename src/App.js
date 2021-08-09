import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

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
        <div className="App" />
        <SearchBar
          handleChange={ this.handleChange }
          value={ search }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default App;
