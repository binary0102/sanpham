import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import LoginPage from './container/LoginPage';
import storeRoot from './store';
import {AccountRouter} from './router/account';
import {Test} from './component/Timeline/Timeline';
import Chart from './component/Chart';
import PrivateRoute from './container/PrivateRoute';
import {TestComponent,ProductDetail} from './component/TestComponent';
import {DrapAndDrop} from './component/DragAndDrop';

const store = storeRoot;
class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
     
           <BrowserRouter >
           <Switch>  
             <Route exact path="/" component={LoginPage} />
             <PrivateRoute path="/account" component={AccountRouter} />
             <Route path="/chart" component= {Chart} />
             <Route path="/test" component={Test} />
             <Route path="/test1" component={TestComponent } />
             <Route path="/test2" component={ProductDetail} />
             <Route path="/testDrap" component={DrapAndDrop} />
             <Route path="*" component={NotFound}  status={404}/>
            
             </Switch>
          
          </BrowserRouter>
          
      </Provider>

    );
  }
}
function NotFound() {
  return (
    <div>
      404;
    </div>
  )
}
export default App;
