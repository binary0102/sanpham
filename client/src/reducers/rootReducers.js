import { combineReducers } from 'redux';
import authencationReducer from './user.reducer';
import categoryReducer,{CategoryReducer} from './category.reducer';
import filterReducer from './filter.reducer';
import productReducer from './product.reducer';
import alertReducer from './alert.reducer';
import {cartReducer} from './cart.reducer';
import authenReducer from './authencation.reducer'

const rootReducer = combineReducers({
    authencationReducer,
    categoryReducer,
    filterReducer,
    productReducer,
    alertReducer,
    cartReducer,
    authenReducer,
    CategoryReducer,
});

export default rootReducer;
