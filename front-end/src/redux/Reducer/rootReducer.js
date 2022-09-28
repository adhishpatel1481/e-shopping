import {combineReducers} from 'redux';
import {cartData} from './reducer';
import { productList } from './productReducer';
import { userProducts } from './userProductReducer';
export default combineReducers({cartData,productList});