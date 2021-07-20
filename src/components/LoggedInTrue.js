import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../redux/actions/imageActions";
import { emptyFavourites } from "../redux/actions/imageActions";
import { clearSearchResults } from "../redux/actions/imageActions";

import { Row, Col, Button } from "react-bootstrap";
import "../style.css";

function LoggedInTrue() {
	const userInfo = useSelector((state) => state.loggedInUser.user);
	const dispatch = useDispatch();

	const sign_out = () => {
		dispatch(signOut("", "", false));
		dispatch(emptyFavourites());
		dispatch(clearSearchResults());
	};

	return (
		<Row className="pl-5">
			<Col md={12} className="mt-5 pt-3 pb-2 label">
				<h3 className="center">You are logged in as {userInfo.email}</h3>
			</Col>
			<Col className="button">
				<Button variant="danger" onClick={sign_out}>
					Sign Out
				</Button>
			</Col>
		</Row>
	);
}

export default LoggedInTrue;
