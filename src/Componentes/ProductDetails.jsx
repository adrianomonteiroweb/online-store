import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';
import FreteComponent from './FreteComponent';
import Valuation from './valuation';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productTest: { shipping: { free_shipping: true } },
    };
  }

  componentDidMount() {
    const { match: { params: { name } } } = this.props;
    this.Detailsfetch(name);
  }

  async Detailsfetch(idProduct) {
    console.log('Carregando... ');
    const promise = await getProductsFromId(idProduct);
    this.setState({ productTest: promise });
  }

  render() {
    const { productTest } = this.state;
    const { title, thumbnail, price, domainId, shipping:
      { free_shipping: frete } } = productTest;
    return (
      <div>
        <Link to="/carrinho"> carrinho </Link>

        <h4
          data-testid="product-detail-name"
          className="nameDetails"
        >
          {title}
          nome
        </h4>
        <h4
          className="priceDetails"
        >
          {price}

        </h4>
        <FreteComponent frete={ frete } />
        <img alt="ImageProduct" className="imageDetails" src={ thumbnail } />

        <div>
          <h4 className="especDetails">
            { domainId }

          </h4>
        </div>
        <Valuation />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
