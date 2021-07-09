import React from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Searchresult() {

    const images = useSelector((state) => state.allImages.images);

    return (
        <Container fluid>
                <Row>
                    {images.map((img) => (
                        <Col xs={3} className='mb-5' key={img.data[0].nasa_id} >
                        <Card className='h-100 bg-white rounded' >
                            <Card.Img variant='top' src={img.links[0].href}/>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title className='mb-0 font-weight-bold text-center' >
                                    {img.data[0].title}
                                </Card.Title>
                                <Button variant='info' className='mt-2'>
                                    Add to favourites
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                    )}
                </Row>
            </Container>
    ); 
    
}

export default Searchresult
