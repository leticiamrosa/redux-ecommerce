import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    handleAddProduct(product) {
        const { addToCart } = this.props;

        addToCart(product);
    }

    render() {
        const { products } = this.state;

        return (
            <ProductList>
                {products &&
                    products.map(product => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>

                            <button
                                type="button"
                                onClick={() => this.handleAddProduct(product)}
                            >
                                <div>
                                    <MdAddShoppingCart size={16} color="#FFF" />{' '}
                                    3
                                </div>

                                <span>ADICIONAR AO CARRINHO</span>
                            </button>
                        </li>
                    ))}
            </ProductList>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
