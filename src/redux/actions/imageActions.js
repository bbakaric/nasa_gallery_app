import { ActionTypes } from '../constants/action-types';
import nasaApi from '../../api/nasaApi';

export const searchImages = (term, date) => async (dispatch) => {
        const response = await nasaApi.get(`/search?q=${term}&media_type=image&page=1&year_start=1920&year_end=${date}`);
        dispatch({type: ActionTypes.SEARCH_IMAGES, payload: response.data.collection.items})
    };

export const setImage = (images) => {
    return {
        type: ActionTypes.SET_IMAGE,
        payload: images
    };
};