import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';
// import * as mdb from 'mdb-ui-kit'; // lib
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody, MDBCardTitle,
  MDBRow,
  MDBBtn,
  MDBCol,
} from 'mdb-react-ui-kit';
// import BotoesDosProdutos from './BotoesDosProdutos';
import FreteComponent from './FreteComponent';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberOfItems: 1,
      cartEntries: true,
    };
  }

  onClickIncress = () => {
    this.setState((previusState) => ({ NumberOfItems: previusState.NumberOfItems + 1 }));
  }

  onClickDecress = () => {
    const { NumberOfItems } = this.state;
    if (NumberOfItems > 1) {
      this.setState((previusState) => (
        { NumberOfItems: previusState.NumberOfItems - 1 }));
    }
  }

  AddToCart = (product) => {
    const { onClick } = this.props;
    const { title, price, thumbnail, id, available_quantity: quantidadeMax } = product;
    const { cartEntries } = this.state;
    const item = {
      title,
      price,
      thumbnail,
      id,
      quantidadeMax,
    };
    if (localStorage.getItem('items') === null && cartEntries === true) {
      localStorage.setItem('items', JSON.stringify([item]));
      this.setState({ cartEntries: false });
    } else if (cartEntries === true) {
      localStorage.setItem(
        'items',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('items')),
          item,
        ]),
      );
      this.setState({ cartEntries: false });
    }
    onClick();
  }

  render() {
    // console.log(<Route path="" />);
    // const { product: { title, price, thumbnail } } = this.props;
    // const { product: { title, price, thumbnail, id }, product } = this.props;

    // const { NumberOfItems } = this.state;
    const {
      product: {
        title,
        price,
        thumbnail,
        id,
        shipping: {
          free_shipping: frete,
        } }, product,
    } = this.props;

    return (
      // <div
      //   data-testid="product"
      // >
      <MDBCard
        style={ {
          maxWidth: '450px',
          minWidth: '450px',
          margin: '5px 10px 5px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        } }
        data-testid="product"
      >
        <MDBRow className="g-0">
          <MDBCol
            md="3"
            style={ {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: '150px',
            } }
          >
            <MDBCardImage
              src={ thumbnail }
              alt={ `Imagem do produto${title}` }
              style={ { maxWidth: '120px', marginLeft: '3px', minWidth: '120px' } }
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle data-testid="shopping-cart-product-name">
                {title}
              </MDBCardTitle>

              {`R$${price}`}

              <FreteComponent frete={ frete } />

              <MDBBtn
                data-testid="product-add-to-cart"
                type="submit"
                id={ id }
                onClick={ () => this.AddToCart(product) }
              >
                Adicionar ao carrinho
              </MDBBtn>
              <br />
              <Link
                style={ { marginTop: '5px' } }
                className="btn btn-outline-primary"
                data-testid="product-detail-link"
                to={ { pathname: `/${id}/details`, state: { ...product } } }
              >
                Ver detalhes
              </Link>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      //   {/* <Link
      //     data-testid="product-detail-link"
      //     to={ { pathname: `/${id}/details`, state: { ...product } } }
      //   >
      //     Ver detalhes
      //   </Link> */}
      // // </div>
    );
  }
}

ProductCard.propTypes = {
  onClick: PropTypes.func,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    frete: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

ProductCard.defaultProps = {
  onClick: () => {},
};

export default ProductCard;
