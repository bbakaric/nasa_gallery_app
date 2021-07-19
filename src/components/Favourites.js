import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FavouritesList from './FavouritesList';

function Favourites() {

    const userInfo = useSelector((state) => state.loggedInUser.user);

    return (
        <Container fluid>
            {!(userInfo.isLoggedIn) ?
            <Row className='pt-5 mt-3 '>
                <Col>
                    <h3 className='center'>You must sign-in before adding pictures to favourites!</h3>
                </Col>
            </Row> :
            <FavouritesList />
            }
        </Container>
    ); 
}

export default Favourites;
