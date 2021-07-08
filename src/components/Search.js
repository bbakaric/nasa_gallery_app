import React,  { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchImages } from '../redux/actions/imageActions';
import Searchresult from './Searchresult';


function Search() {

        const [term, setTerm] = useState('');
        const [date, setDate] = useState(new Date().getFullYear());

        const handleChangeTerm = (e) => {
            setTerm(e.target.value)
        };

        const dispatch = useDispatch();
        const onSubmit = (e) => {
            e.preventDefault();
            dispatch(searchImages(term, date))
            setTerm('')
        }
        
    return (
        <Container>
            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="searchBar">
                    <Form.Control type="text" placeholder="Enter your term (ex. sun)" onChange={handleChangeTerm} value={term} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Search
                </Button>
            </Form>
            <Searchresult />
        </Container>
    );
}

export default Search;