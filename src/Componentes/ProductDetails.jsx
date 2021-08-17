import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FreteComponent, Valuetion } from './index';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state: { title, thumbnail, price, domainId, shipping:
      { free_shipping: frete } } } } = props;
    this.state = {
      productTest: {
        title,
        thumbnail,
        price,
        domainId,
        shipping: { frete },
      },
    };
  }

  render() {
    const { productTest: { title, thumbnail, price, domainId, shipping:
      { free_shipping: frete } } } = this.state;
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
        <Valuetion />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      domainId: PropTypes.string,
      shipping: PropTypes.shape({
        free_shipping: PropTypes.bool,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
