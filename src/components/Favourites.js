import React from "react";

import { useSelector } from "react-redux";

import FavouritesList from "./FavouritesList";

import "../style.css";
import { Container, Row, Col } from "react-bootstrap";

function Favourites() {
	const userInfo = useSelector((state) => state.loggedInUser.user);

	return (
		<Container fluid className="px-0">
			{!userInfo.isLoggedIn ? (
				<Container fluid className="background">
					<Row className="pl-5">
						<Col className="mt-5 pt-5 label">
							<h3 className="center">
								You must sign-in before adding pictures to favourites!
							</h3>
						</Col>
					</Row>
				</Container>
			) : (
				<FavouritesList />
			)}
		</Container>
	);
}

export default Favourites;
