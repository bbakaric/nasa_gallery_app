import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Favourites() {

    const images = useSelector((state) => state.allImages.images);

    return (
        <Container fluid>
                <Row>
                        <Col xs={3} className='mb-5' >
                        <Card className='h-100 bg-white rounded' >
                            <Card.Img variant='top' src='https://images-assets.nasa.gov/image/PIA12210/PIA12210~thumb.jpg'/>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title className='mb-0 font-weight-bold text-center' >
                                    Title
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    ); 
}

export default Favourites;
