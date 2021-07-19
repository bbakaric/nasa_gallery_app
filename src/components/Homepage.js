import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';

function Homepage() {

    return (
        <Container fluid>
            <Row>
                <Col className='home'>
                    <h1>Welcome to NASA Gallery Search Engine</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage