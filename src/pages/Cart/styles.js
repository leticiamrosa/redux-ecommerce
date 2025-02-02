import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background-color: #fff;
    border-radius: 4px;
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const ButtonSubmit = styled.button`
    padding: 10px 20px;
    color: #eee;
    text-transform: uppercase;
    border: 0;
    border-radius: 4px;
    background-color: #7159c1;
    font-size: 16px;
    font-weight: bold;
`;

export const Footer = styled.footer`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background 0.2s;
    }

    &:hover {
        background-color: ${darken(0.03, '#7159c1')};
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;
