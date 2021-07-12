import React from 'react';
import Homepage from './Homepage';
import Search from './Search';
import Favourites from './Favourites';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Navigation() {
    return (
    <Router>
        <Container fluid >
        <Navbar bg="dark" variant="dark" expand="md" fixed="top" className='h-10'>
                <Navbar.Brand as={Link} to="/" className="px-3">
                    NASA Gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto px-3">
                        <Nav.Link as={Link} to="/">Homepage</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>

            <Switch>
                <Route path="/" exact component={Homepage} />
                    
                
                <Route path="/search" component={Search}>
                    <Search />
                </Route>
                <Route path="/favourites" component={Favourites}>
                    <Favourites />
                </Route>
                {/* <Route path="/login" component={Login}>
                    <Login />
                </Route> */}
            </Switch>
    </Router>
    );
}

export default Navigation
