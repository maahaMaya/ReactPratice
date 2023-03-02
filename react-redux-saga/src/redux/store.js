//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import  productSafga  from './productSaga'
import createSagaMiddleware from 'redux-saga';

//const store = createStore(rootReducer);
const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer : rootReducer,
    middleware: () => [sagaMiddleWare]
})

sagaMiddleWare.run(productSafga)

export default store;