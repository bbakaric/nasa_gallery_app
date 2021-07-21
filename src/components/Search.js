import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
	clearSearchResults,
	searchImages,
} from "../redux/actions/imageActions";

import "../style.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import Searchresult from "./Searchresult";

function Search() {
	const [term, setTerm] = useState("");
	const date = new Date().getFullYear();

	const handleChangeTerm = (e) => {
		setTerm(e.target.value);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	const dispatch = useDispatch();
	const onSubmit = (e) => {
		e.preventDefault();
		if (term !== "") {
			dispatch(searchImages(term, date));
			scrollToTop();
		} else {
			alert("Enter search term !");
		}
	};

	useEffect(() => {
		dispatch(clearSearchResults());
	});

	return (
		<Container fluid>
			<Form onSubmit={onSubmit}>
				<Row className="searchBar">
					<Col xs={0} sm={2} md={2} />
					<Col xs={8} sm={7} md={7}>
						<Form.Control
							placeholder="Search term"
							onChange={handleChangeTerm}
							value={term}
							autoFocus={true}
						/>
					</Col>
					<Col xs={1} sm={1} md={1} style={{ textAlign: "center" }}>
						<Button type="submit" variant="danger">
							Search
						</Button>
					</Col>
					<Col xs={0} sm={2} md={2} />
				</Row>
			</Form>
			<Searchresult />
		</Container>
	);
}

export default Search;
