

import DashBroedContainer from '../container/DashBroadPage'
import { Switch, Route,Redirect } from 'react-router-dom';
import { Order } from '../component/DashBroad/Order';
import { Home } from '../component/DashBroad/Home'
import React from 'react';
import { SideBar } from '../component/Sidebar';
import HeaderContainer from '../container/HeaderContainer';
import ChatPage from '../container/ChatPage';
import {Profile} from '../component/Profile/Profile';
import ProductDetailPage from '../container/ProductDetail'
export const AccountRouter = () => {
    return (
        <div className="d-flex">
            <SideBar />
            <div className="w-100" style={{ backgroundColor: "#f8f9fc" }}>
                <HeaderContainer />
                <Switch>
                    <Route exact path="/account/" component={Home} />
                    <Route path="/account/order" component={Order} />
               
                    <Route path="/account/message" component={ChatPage} />
                    <Route path="/account/product"  >
                        <Switch>
                            <Route  exact path="/account/product" component={DashBroedContainer}  />
                            <Route  path="/account/product/:productId" component={ProductDetailPage} /> 
                        </Switch>
                    </Route>
                
                    <Route path="/account/profile" component={Profile} />
                </Switch>
            </div>
        </div>
    )
}

export const PrivateRoute = ({ component: Component,authentication,requestAuth, ...rest }) => {
    const {isLoggedIn,isAuthencation} = authentication;
    
    if (isAuthencation === false && isLoggedIn === false) {
        requestAuth()
    }
    return (
    <Route {...rest} render={props => (
        isLoggedIn !==false  && isAuthencation !== false
            ? <Component {...props} />
            : isLoggedIn === false ? null :  <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
    )} />)
}
