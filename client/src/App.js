import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import PageHeader from './container/HeaderContainer';
import Footer from './component/Footer';
import './sass/App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import LoginPage from './container/LoginPage';
import SalePage from './container/SalePage';
import HomePage from './container/HomePage'
import Content from './component/Content';
import ShoppingCartPage from './container/ShopingCartPage';
import ProductPage from './container/ProductPage';
import PrivateRouter from './container/PrivateRouter';
import storeRoot from './store';
import AccountPage from './container/AccountPage';
import history from './helper/history';
import {Account} from './router/account';
const store = storeRoot;

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <BrowserRouter history={history} >

          <PageHeader />
          
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category/:categorySlug" component={Content} />
            <Route  path="/product/:slug" component={ProductPage} />
            <Route path="/sale/:categoryId" component={SalePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/cart" component={ShoppingCartPage} />
           
            <PrivateRouter  path="/account" component={Account} />
            <Route path="*" component={NotFound}  status={404}/>
            
            </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}
/*
function HomePage() {
  return (
    <Fragment>

      <div id="outer-container" >
        <Menu burgerButtonClassName={"hidden-xs "} bmItemList={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} disableCloseOnEsc >

          <a id="home" className="menu-item" href="/">Đăng nhập</a>
          <a id="about" className="menu-item" href="/about">Tạo tài khoản</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <main id="page-wrap">
          <PageHeader />
          <Content />
        </main>
        <Footer />
      </div>

    </Fragment>
  )
}
*/
function NotFound() {
  return (
    <div>
      404;
    </div>
  )
}
export default App;
