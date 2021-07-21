import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectedImage } from "../redux/actions/imageActions";

import "../style.css";
import { Card, Button, Col, Row } from "react-bootstrap";

function Searchresult() {
	const images = useSelector((state) => state.allImages.images);
	const user = useSelector((state) => state.loggedInUser.user);
	const dispatch = useDispatch();

	return (
		<Row className="mt-5 pt-5" xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
			{images.map((img) => (
				<Col className="pb-1 pt-5" key={img.data[0].nasa_id}>
					<Card
						className="h-100 bg-white"
						style={{ width: "100%", height: "30vh" }}
					>
						<Card.Img
							className="image"
							style={{ objectFit: "cover", height: "30vh" }}
							variant="top"
							src={img.links[0].href}
							onClick={() => window.open(img.links[0].href, "_blank")}
						/>
						<Card.Body>
							<Card.Title className="mb-0 font-weight-bold text-center">
								{img.data[0].title}
							</Card.Title>
						</Card.Body>
						{user.isLoggedIn ? (
							<Button
								variant="warning"
								onClick={() =>
									dispatch(
										selectedImage(
											img.data[0].nasa_id,
											img.links[0].href,
											img.data[0].title
										)
									)
								}
							>
								Add to favourites
							</Button>
						) : null}
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Searchresult;
