import React from 'react';
import propTypes from 'prop-types';
import Categories from './Categories';
import './CategoriesContainer.css';

class CategoriesContainer extends React.Component {
  render() {
    const time = 3000;
    const { categories } = this.props;
    setTimeout(() => console.log(categories), time);
    return (
      <aside className="aside">
        <p>Categorias:</p>
        {categories
          .map((obj) => (
            <Categories key={ obj.id } category={ obj.name } />
          ))}
      </aside>
    );
  }
}

CategoriesContainer.propTypes = {
  categories: propTypes.arrayOf(propTypes.string).isRequired,
};

export default CategoriesContainer;
