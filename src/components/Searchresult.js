import React from 'react'
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Searchresult() {

    const images = useSelector((state) => state.allImages.images);

    const imgList = images.map((img) => {
        return(
        <Container>
            <ListGroup.Item>
            <Card style={{ width: '18rem'}} className='text-center'>
                <Card.Body>
                    <Card.Title>{img.data[0].title}</Card.Title>
                    <Card.Img variant="top" src={img.links[0].href} />
                    <Button variant="primary">Add to favourites</Button>
                </Card.Body>
            </Card>
            </ListGroup.Item>
        </Container>
        );
    });

    return (
        <>{imgList}</>
    ); 
    
}

export default Searchresult
