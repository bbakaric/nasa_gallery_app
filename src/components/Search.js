import React,  { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchImage } from '../redux/actions/imageActions';


function Search() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImage());
    }, []);


    return (
        <Container>
            <Form className='my-5'>
                <Form.Group className="mb-3" controlId="searchBar">
                    <Form.Control type="search" placeholder="Enter search term" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Search
                </Button>
            </Form>
        </Container>
    );
}

export default Search;