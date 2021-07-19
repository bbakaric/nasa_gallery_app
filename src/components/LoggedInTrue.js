import React from 'react';
import { signOut } from '../redux/actions/imageActions'
import { emptyFavourites } from '../redux/actions/imageActions';
import { clearSearchResults } from '../redux/actions/imageActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

function LoggedInTrue() {

    const userInfo = useSelector((state) => state.loggedInUser.user);
    const dispatch = useDispatch();

    const sign_out = () => {
        dispatch(signOut('', '', false));
        dispatch(emptyFavourites());
        dispatch(clearSearchResults());
    }

    return (
        <Container fluid>
            <Row className='mt-5 pt-2'>
                <Col >
                    <h3 className='center'>You are logged in as {userInfo.email}</h3>
                </Col>
            </Row>
            <Row>
                <Col className='button'>
                    <Button variant='danger' onClick={sign_out} >Sign Out</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default LoggedInTrue;