import React from 'react';
import { signOut } from '../redux/actions/imageActions'
import { emptyFavourites } from '../redux/actions/imageActions';
import { clearSearchResults } from '../redux/actions/imageActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

function LoggedInTrue() {

    const userInfo = useSelector((state) => state.loggedInUser.user);
    const dispatch = useDispatch();

    const sign_out = () => {
        dispatch(signOut('', '', false));
        dispatch(emptyFavourites());
        dispatch(clearSearchResults());
    }

    return (
        <div style={{marginTop:'60px', marginLeft:'10px'}}>
            <h3>You are logged in as {userInfo.email}</h3>
            <Button variant='danger' onClick={sign_out}>Sign Out</Button>
        </div>
    )
}

export default LoggedInTrue;