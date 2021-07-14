import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

function Favourites() {

    const favouriteImages = useSelector((state) => state.favourites.image);

    console.log(favouriteImages);


    return (
        <Container fluid>
                <Row>
                    {favouriteImages.map((img) => (
                        <Col xs={3} className='mb-5' key={img.id} >
                        <Card className='h-100 bg-white' style={{width: '45vh', height: '30vh'}}>
                            <Card.Img style={{objectFit: 'cover', height: '30vh'}} variant='top' src={img.url} />
                            <Card.Body >
                                <Card.Title className='mb-0 font-weight-bold text-center' >
                                    {img.title} 
                                </Card.Title>
                            </Card.Body>
                            <Button variant='warning'>
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

export default Favourites;
