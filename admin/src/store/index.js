import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import rootReducer from '../reducers/rootReducers';

const initialState = {}
const sagaMiddlewares = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddlewares)));

sagaMiddlewares.run(rootSaga);

export default store;