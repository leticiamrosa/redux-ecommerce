import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, ButtonSubmit, Footer } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>

                <tbody>
                    {cart &&
                        cart.map(product => (
                            <tr>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </td>
                                <td>
                                    <strong>{product.title}</strong>
                                    <span>{product.priceFormatted}</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button">
                                            <MdRemoveCircleOutline
                                                size={20}
                                                color="#7159c1"
                                                onClick={() =>
                                                    decrement(product)
                                                }
                                            />
                                        </button>
                                        <input
                                            type="number"
                                            value={product.amount}
                                            readOnly
                                        />
                                        <button type="button">
                                            <MdAddCircleOutline
                                                size={20}
                                                color="#7159c1"
                                                onClick={() =>
                                                    increment(product)
                                                }
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>R$258,80</strong>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeFromCart(product.id)
                                        }
                                    >
                                        <MdDelete size={20} color="#7159c1" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </ProductTable>

            <Footer>
                <ButtonSubmit type="button">Finalizar pedido</ButtonSubmit>
                <Total>
                    <span>TOTAL</span>
                    <strong> R$1920,28</strong>
                </Total>
            </Footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

Cart.propTypes = {
    removeFromCart: PropTypes.func.isRequired,
    updateAmount: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
