import { ActionTypes } from '../constants/action-types';
import nasaApi from '../../api/nasaApi';

export const searchImages = (term, date) => async (dispatch) => {
    const response = await nasaApi.get(`/search?q=${term}&media_type=image&page=1&year_start=1920&year_end=${date}`);
    dispatch({
        type: ActionTypes.SEARCH_IMAGES,
        payload: response.data.collection.items
    })
};

export const selectedImage = (id, url, title) => async (dispatch) => {
    dispatch({
        type: ActionTypes.SELECTED_IMAGE,
        payload: {id, url, title}
    })  
};

export const deleteImage = (id) => async (dispatch) => {
    dispatch({
        type: ActionTypes.DELETE_IMAGE,
        payload: id
    })
};