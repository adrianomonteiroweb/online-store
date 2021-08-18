import PropTypes from 'prop-types';
import React from 'react';
import {
  MDBBtn,

} from 'mdb-react-ui-kit';

class Categories extends React.Component {
  render() {
    const { category, handleClick, id } = this.props;
    return (
      <label htmlFor="category">
        <MDBBtn
          onClick={ (e) => handleClick(e) }
          data-testid="category"
          name="category"
          type="radio"
          id={ id }
          value={ category }
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
