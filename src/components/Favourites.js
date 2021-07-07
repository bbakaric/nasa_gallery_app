import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Card, Button } from 'react-bootstrap';

function Favourites() {

    const images = useSelector((state) => state.allImages.image);

    return (
        <Container fluid>
            <Card style={{ width: '18rem'}} className='text-center'>
                <Card.Img variant="top" src={images.photos[0].img_src} />
                <Card.Body>
                    <Card.Title>Rover name: {images.photos[0].rover.name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary">Add to favourites</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Favourites;
