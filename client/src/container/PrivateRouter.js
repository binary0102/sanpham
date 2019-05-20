import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const PrivateRouter = ({Component,payload, ...rest}) => {
  
    return (    
        <Route {...rest} render={(props) => (
            true ?  <Component {...props} /> : <Redirect to={{pathname : '/login'}} />
        )} />
    )
}
const mapStatetoProps = (state) => {
    console.log(state);
    return {
        payload: state.authenReducer,
    }
} 
export default connect(mapStatetoProps, null)(PrivateRouter);
