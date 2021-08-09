import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <form>
        <label htmlFor="input-search">
          <input
            type="text"
            name="search"
            onChange={ handleChange }
            id="input-search"
            value={ value }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
