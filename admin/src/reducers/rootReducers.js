import { combineReducers } from 'redux';
import authencationReducer from './user.reducer';
import productReducer from './product.reducer';
import alertReducer from './alert.reducer';
import {deleteProduct,createProduct,updateProduct,ProductDetailReducer} from './product.reducer';
import {uploadReducer} from './upload.reducer'
import messageReducer from './message.reducer';
import {partReducer} from './part.reducer';
const rootReducer = combineReducers({
    authencationReducer,
    productReducer,
    alertReducer,
    deleteProduct,
    createProduct,
    messageReducer,
    updateProduct,
    ProductDetailReducer,
    uploadReducer,
    partReducer
});

export default rootReducer;
