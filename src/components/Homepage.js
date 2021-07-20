import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../style.css";

function Homepage() {
	return (
		<Container fluid className="home background">
			<Row>
				<Col md={12} className="description">
					<h1>
						Welcome to <br /> NASA Gallery Search Engine
					</h1>
					<br />
					<p>
						This is a small ReactJS project which enables you to search for
						official NASA pictures and add them to your favourites list.
					</p>
					<p>
						Project is using NASA Gallery API along with React Redux, React
						Bootstrap and Axios.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Homepage;
