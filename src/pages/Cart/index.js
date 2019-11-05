import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total, ButtonSubmit, Footer } from './styles';

function Cart({ cart, dispatch }) {
    function handleRemoveCart(productId) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: productId,
        });
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
                                            handleRemoveCart(product.id)
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

Cart.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Cart);
