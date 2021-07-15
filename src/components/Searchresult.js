import React from 'react';
import '../style.css';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectedImage } from '../redux/actions/imageActions';

function Searchresult() {

    const images = useSelector((state) => state.allImages.images);
    const user = useSelector((state) => state.loggedInUser.user);
    const dispatch = useDispatch()

    return (
        <Container fluid>
                <Row>
                    {images.map((img) => (
                        <Col xs={3} className='mb-5' key={img.data[0].nasa_id} >
                        <Card className='h-100 bg-white' style={{width: '45vh', height: '30vh'}}>
                            <Card.Img className='image' style={{objectFit: 'cover', height: '30vh'}} variant='top' src={img.links[0].href} onClick={() => window.open(img.links[0].href, '_blank')}/>
                            <Card.Body >
                                <Card.Title className='mb-0 font-weight-bold text-center' >
                                    {img.data[0].title} 
                                </Card.Title>
                            </Card.Body>
                            <Button variant='warning' onClick={() => {
                                user.isLoggedIn ?
                                dispatch(selectedImage(img.data[0].nasa_id, img.links[0].href, img.data[0].title)) :
                                alert('You must be signed-in to create list of favourite pictures!')
                                }}>
                                Add to favourites
                            </Button>
                        </Card>
                    </Col>
                    )
                    )}
                </Row>
            </Container>
    ); 
    
}

export default Searchresult
