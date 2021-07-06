import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';


function Search() {

    const images = useSelector((state) => state.images);
    const dispatch = useDispatch();
    
    const { fetch_images } = bindActionCreators(actionCreators, dispatch);
    
    return (
        <div>
            {console.log(fetch_images)}
            Test
        </div>
    )
}

export default Search;