import React from 'react';
import propTypes from 'prop-types';
import Categories from './Categories';
import './CategoriesContainer.css';

class CategoriesContainer extends React.Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <aside className="aside">
        <p>Categorias:</p>
        {categories
          .map((obj) => (
            <Categories
              key={ obj.id }
              id={ obj.id }
              handleClick={ handleClick }
              category={ obj.name }
            />
          ))}
      </aside>
    );
  }
}

CategoriesContainer.propTypes = {
  categories: propTypes.arrayOf(propTypes.string).isRequired,
  handleClick: propTypes.func.isRequired,
};

export default CategoriesContainer;
