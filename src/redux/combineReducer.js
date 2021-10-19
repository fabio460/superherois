import { combineReducers } from 'redux';
import usuarioReducer from './usuarioReducer';
export default combineReducers({
    usuario:usuarioReducer
});