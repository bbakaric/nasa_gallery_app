import { FETCH_IMAGES, SET_IMAGES } from '../constants/action-types';
import nasaApi from '../../api/nasaApi';

export const fetchImage = () => async (dispatch) => {
        const response = await nasaApi.get('/images');
        dispatch({type: FETCH_IMAGES, payload: response.data})
    };

export const setImages = (images) => {
    return {
        type: SET_IMAGES,
        payload: images
    };
};