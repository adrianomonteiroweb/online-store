import PropTypes from 'prop-types';
import React from 'react';
import {
  MDBBtn,

} from 'mdb-react-ui-kit';
import './ProductCard.css';

class Categories extends React.Component {
  render() {
    const { category, handleClick, id } = this.props;
    const buttomCss = {
      flexGrow: '1',
    };
    return (
      <label htmlFor="category" id="label-category-btn">
        <MDBBtn
          onClick={ (e) => handleClick(e) }
          data-testid="category"
          name="category"
          type="radio"
          id={ id }
          value={ category }
          style={ buttomCss }
        >
          { category }
        </MDBBtn>
      </label>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.string,
}.isRequired;

export default Categories;
