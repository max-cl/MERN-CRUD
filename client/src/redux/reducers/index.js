import { combineReducers } from 'redux';
import productStore from './product-reducer';

const reducers = {
    productStore: productStore
}

const rootReducer = combineReducers(reducers);

export default rootReducer;