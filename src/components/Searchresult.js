import React, { useState, useEffect } from 'react'
import { Container, Card, Button, Col, Row, Modal, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Searchresult() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const images = useSelector((state) => state.allImages.images);

    return (
        <Container fluid>
                <Row>
                    {images.map((img) => (
                        <Col xs={3} className='mb-5' key={img.data[0].nasa_id} >
                        <Card className='h-100 bg-white' style={{width: '45vh', height: '30vh'}}>
                            <Card.Img style={{objectFit: 'cover', height: '30vh'}} variant='top' src={img.links[0].href} onClick={handleShow}/>
                            <Card.Body >
                                <Card.Title className='mb-0 font-weight-bold text-center' >
                                    {img.data[0].title}
                                </Card.Title>
                            </Card.Body>
                            <Button variant='warning'>
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
