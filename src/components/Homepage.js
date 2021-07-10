import React from 'react'
import { Container, Image } from 'react-bootstrap';

function Homepage() {

    return (
            <div style={{marginTop:'50px', color:'white'}}>
            <h1 style={{color:'white'}}>Welcome to NASA Gallery Search Engine</h1>
            <Image src='https://www.universetoday.com/wp-content/uploads/2021/04/speckle.jpg' style={{height:'100vh', width:'100%'}} />
            </div>
    )
}

export default Homepage