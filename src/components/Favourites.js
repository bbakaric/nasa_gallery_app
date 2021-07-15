import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FavouritesList from './FavouritesList';

function Favourites() {

    const userInfo = useSelector((state) => state.loggedInUser.user);

    return (
        <Container fluid className='mt-5 pt-2'>
            {!(userInfo.isLoggedIn) ? 
            <div>
                <h3>You must sign-in before add pictures to favourites!</h3>
            </div> :
            <FavouritesList />
            }
        </Container>
    ); 
}

export default Favourites;
