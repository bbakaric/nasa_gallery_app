import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setImages, fetchImage } from '../redux/actions/imageActions';


function Search() {
    const images = useSelector((state) => state.allImages.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImage());
    }, []);

    

    return (
        <div>
            test
        </div>
        
    )
}

export default Search;