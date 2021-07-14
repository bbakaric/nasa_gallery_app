import React,  { useState } from 'react';
import '../style.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchImages } from '../redux/actions/imageActions';
import Searchresult from './Searchresult';


function Search() {

        const [term, setTerm] = useState('');
        const date = new Date().getFullYear();

        const handleChangeTerm = (e) => {
            setTerm(e.target.value)
        };

        const scrollToTop = () =>{
            window.scrollTo({
              top: 0
            });
          };

        const dispatch = useDispatch();
        const onSubmit = (e) => {
            e.preventDefault();
            if(term !== '') {
            dispatch(searchImages(term, date))
            }
            setTerm('')
            scrollToTop();
        }
        
    return (
        <div>
        <div className='searchBar' >
            <Form onSubmit={onSubmit} className='pt-5' expand='sm' >
                <Row className='my-3 justify-content-md-center pb-2' lg='auto' >
                    <Col lg='4'>
                    <Form.Control placeholder="Search term" onChange={handleChangeTerm} value={term} autoFocus={true}/>
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