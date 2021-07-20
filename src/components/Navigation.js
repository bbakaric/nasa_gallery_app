import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Homepage from "./Homepage";
import Search from "./Search";
import Favourites from "./Favourites";
import Login from "./Login";

import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
	const user = useSelector((state) => state.loggedInUser.user);

	return (
		<Router>
			<Container fluid>
				<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
					<Navbar.Brand as={Link} to="/" className="px-3">
						NASA Gallery
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto px-3">
							<Nav.Link as={Link} to="/">
								Homepage
							</Nav.Link>
							<Nav.Link as={Link} to="/search">
								Search Gallery
							</Nav.Link>
							<Nav.Link as={Link} to="/favourites">
								Favourites
							</Nav.Link>
							<Nav.Link as={Link} to="/login">
								{user.isLoggedIn ? "Sign-Out" : "Sign-In"}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>

			<Switch>
				<Route path="/" exact>
					<Homepage />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="/favourites">
					<Favourites />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default Navigation;
