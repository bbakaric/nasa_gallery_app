import { combineReducers } from 'redux';
import {imageReducer} from './imageReducer';

const rootReducer = combineReducers({
    allImages: imageReducer
});

export default rootReducer;