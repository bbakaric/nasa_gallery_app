import React,  { useState } from 'react';
import '../style.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
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
            if(term !== '') {
            dispatch(searchImages(term, date))
            }
            setTerm('')
        }
        
    return (
        <div>
        <div className='searchBar'>
            <Form onSubmit={onSubmit} className='pt-5' >
                <Row className='my-3 justify-content-md-center pb-2' lg='auto' >
                    <Col lg='4'>
                    <Form.Control placeholder="Search term" onChange={handleChangeTerm} value={term}/>
                    </Col>
                    <Col>
                    <Button type="submit" variant='danger' >Search</Button>
                    </Col>
                </Row>
            </Form>
            </div>
            <div>
            <Searchresult />
            </div>
            </div>
    );
}

export default Search;