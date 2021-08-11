import PropTypes from 'prop-types';
import React from 'react';

class Categories extends React.Component {
  render() {
    const { category, handleClick, id } = this.props;
    return (
      <label htmlFor="category">
        <input
          onClick={ (e) => handleClick(e) }
          data-testid="category"
          name="category"
          type="radio"
          id={ id }
          value={ category }
        />
        { category }
      </label>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.string,
}.isRequired;

export default Categories;
