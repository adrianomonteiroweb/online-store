import React from 'react';
import Loading from './Loading';
// import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCartCard from './ProductCartCard';

class Carrinho extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listaDeProdutos: [],
			loading: true,
		};
	}

	componentDidMount() {
		this.getStorageItems();
	}

	getStorageItems = () => {
		const localStorageItems = JSON.parse(localStorage.getItem('items'));
		// console.log(localStorageItems.length)
		if (localStorage.getItem('items').length !== 2) {
			this.setState({ listaDeProdutos: [...localStorageItems] });
			this.setState({ loading: false });
			console.log(localStorageItems)
		}
	};

	remover = (id) => {
		const { listaDeProdutos } = this.state;
		const findCartItem = listaDeProdutos.find((elemento) => elemento.id === id);
		
		const localStorageItems = JSON.parse(localStorage.getItem('items'));
		const filtered = localStorageItems.filter(item => item.id !== id);
		localStorage.setItem('items', JSON.stringify(filtered));

		const indexARetirar = listaDeProdutos
			.indexOf(findCartItem);
		listaDeProdutos.splice(indexARetirar, 1);
		this.setState({ listaDeProdutos });
    
		if (localStorage.getItem('items').length === 2) {
			this.setState({ loading: true });
		}
	}

	render() {
		const { listaDeProdutos, loading } = this.state;
    // console.log(listaDeProdutos)
		// if (loading) return <Loading />;

		if (loading) {
			return (
				<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
			);
		}
		return (
			<div>
				{listaDeProdutos.map((produto) => (
					<div key={ produto.id } className="containerItem">
						<ProductCartCard
							key={ produto.id }
							product={ produto }
							funcRemover={ this.remover }
						/>
					</div>))}
			</div>
		);
	}
}

export default Carrinho;
