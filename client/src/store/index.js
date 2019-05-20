import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import rootReducer from '../reducers/rootReducers';

const initialState = {}
const sagaMiddlewares = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(sagaMiddlewares)
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddlewares)));
store.subscribe(() => {
	let products = JSON.parse(localStorage.getItem("product"));

	let getStore = store.getState();
	let getOfProduct = getStore.productReducer.payload.product || [];
	if (products === null ) {
		localStorage.setItem('product',JSON.stringify([]));
	}
	if (getOfProduct.title !== undefined) {
		if (!products) {
			localStorage.setItem('product',JSON.stringify([getOfProduct]));
		
		}else {
		
			let findNode = products.find((product) => {
				return product._id === getOfProduct._id
			})
		
			if (findNode === undefined)  {
				
				if (products.length > 4) {
					products.shift();
				}
				localStorage.setItem('product',JSON.stringify([...products,getOfProduct]));
			}
		
		}
	}
	
});
sagaMiddlewares.run(rootSaga);

export default store;