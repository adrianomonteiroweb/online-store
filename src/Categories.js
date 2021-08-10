import PropTypes from 'prop-types';
import React from 'react';

class Categories extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <label htmlFor="category">
        <input data-testid="category" type="radio" />
        { category }
      </label>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.string,
}.isRequired;

export default Categories;
