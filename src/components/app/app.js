import React from "react";
import './app.css'
import {Route, Switch} from "react-router-dom";
import ShopHeader from "../shop-header";
import {connect} from "react-redux";
import withSuspense from "../hoc/with-suspense";

const CartPage = React.lazy(() => import('../pages/cart-page'));
const HomePage = React.lazy(() => import('../pages/home-page'));


const App = (props) => {
    const { orderCount} = props;
    return (
        <main role="main" className="container">
            <ShopHeader numItems={orderCount}/>
            <Switch>
                <Route path='/' render={withSuspense(HomePage)} exact/>
                <Route path='/cart' render={withSuspense(CartPage)}/>
            </Switch>
        </main>
    )
}

const mapStateToProps = ({shoppingCart: { orderCount}}) => {
    return {
        orderCount
    }
}

export default connect(mapStateToProps)(App);