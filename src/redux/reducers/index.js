import { combineReducers } from "redux";
import allImagesReducer from "./imageReducer";
import { selectedImageReducer } from "./selectedImageReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
	allImages: allImagesReducer,
	favourites: selectedImageReducer,
	loggedInUser: loginReducer,
});

export default rootReducer;
