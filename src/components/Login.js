import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { logIn } from "../redux/actions/imageActions";
import LoggedInTrue from "./LoggedInTrue";

import { Container, Form, Button, Col, Row } from "react-bootstrap";
import "../style.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const user = useSelector((state) => state.loggedInUser.user);

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (email.trim() && password.trim() !== "") {
			dispatch(logIn(email, password, true));
		} else {
			alert("Please enter your email and password to login");
		}
		setEmail("");
		setPassword("");
	};

	const dispatch = useDispatch();

	return (
		<Container fluid className="background">
			{user.isLoggedIn ? (
				<LoggedInTrue />
			) : (
				<Form onSubmit={onSubmit} className="ml-5">
					<Row>
						<Form.Label column className="label mt-5 pt-5">
							Email
						</Form.Label>
					</Row>
					<Row>
						<Col sm={10} md={5} xl={5}>
							<Form.Control
								type="email"
								placeholder="Email"
								onChange={handleChangeEmail}
								value={email}
								autoFocus={true}
							/>
						</Col>
					</Row>
					<Row>
						<Form.Label column className="label">
							Password
						</Form.Label>
					</Row>
					<Row>
						<Col sm={10} md={5} xl={5}>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={handleChangePassword}
								value={password}
							/>
						</Col>
					</Row>
					<Row>
						<Col
							sm={{ span: 10, offset: 0 }}
							md={{ span: 10, offset: 0 }}
							lg={{ span: 10, offset: 0 }}
							className="mt-3"
						>
							<Button type="submit">Sign in</Button>
						</Col>
					</Row>
				</Form>
			)}
		</Container>
	);
}

export default Login;
