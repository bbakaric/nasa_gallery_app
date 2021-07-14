import { combineReducers } from 'redux';
import allImagesReducer from './imageReducer';
import { selectedImageReducer } from './selectedImageReducer';

const rootReducer = combineReducers({
    allImages: allImagesReducer,
    favourites: selectedImageReducer
});

export default rootReducer;