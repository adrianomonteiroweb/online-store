import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productTest: '',
    };
  }

  // falta um componente que renderize os produtos, para de lá eu pegar o item selecionado pelo usuário

  componentDidMount() {
    const { match: { params: { name } } } = this.props;
    this.Detailsfetch('MLB1772063061', name);
  }

  async Detailsfetch(idProduct, product) {
    console.log('Carregando... ');
    const promise = await getProductsFromCategoryAndQuery(idProduct, product);
    this.setState({ productTest: promise.results[0] });
  }

  render() {
    const { productTest } = this.state;
    const { title, thumbnail, price, domain_id } = productTest;

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
        <img alt="ImageProduct" className="imageDetails" src={ thumbnail } />

        <div>
          <h4 className="especDetails">
            { domain_id }

          </h4>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
