import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteImage } from '../redux/actions/imageActions';

function FavouritesList() {

    const favouriteImages = useSelector((state) => state.favourites.image);
    const dispatch = useDispatch();

    return (
                <Row className='mt-3 pt-5' xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
                    {favouriteImages.map((img) => (
                        <Col key={img.id} className='pt-2'>
                        <Card className='h-100 bg-white' style={{width: '100%', height: '30vh'}}>
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
    ); 
}

export default FavouritesList;