import React from 'react';
import './shop-header.css';
import {Link} from "react-router-dom";

const ShopHeader = ({numItems}) => {
    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to='/'>ReStore</Link>
            <Link className="shopping-cart" to='/cart'>
                <i className="cart-icon fa fa-shopping-cart"/>
                Cart (<span className="cart-items-count">{numItems}</span>)
            </Link>
        </header>
    );
};

export default ShopHeader;
