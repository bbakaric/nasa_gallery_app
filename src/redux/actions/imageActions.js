import { ActionTypes } from '../constants/action-types';
import nasaApi from '../../api/nasaApi';

export const fetchImage = () => async (dispatch) => {
        const response = await nasaApi.get('/images');
        dispatch({type: ActionTypes.FETCH_IMAGES, payload: response.data})
    };

export const setImages = (images) => {
    return {
        type: ActionTypes.SET_IMAGES,
        payload: images
    };
};