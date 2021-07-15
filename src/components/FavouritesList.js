import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteImage } from '../redux/actions/imageActions';

function FavouritesList() {

    const favouriteImages = useSelector((state) => state.favourites.image);
    const dispatch = useDispatch();

    return (
        <Container fluid>
                <Row>
                    {favouriteImages.map((img) => (
                        <Col xs={3} className='mt-5 pt-5' key={img.id} >
                        <Card className='h-100 bg-white' style={{width: '45vh', height: '30vh'}}>
                            <Card.Img style={{objectFit: 'cover', height: '30vh'}} variant='top' src={img.url} />
                            <Card.Body >
                                <Card.Title className='mb-0 font-weight-bold text-center' >
                                    {img.title} 
                                </Card.Title>
                            </Card.Body>
                            <Button variant='danger' onClick={() => dispatch(deleteImage(img.id))}>
                                Delete
                            </Button>
                        </Card>
                    </Col>
                    )
                    )}
                </Row>

            </Container>
    ); 
}

export default FavouritesList;