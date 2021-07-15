import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { logIn } from '../redux/actions/imageActions';
import { useDispatch, useSelector } from 'react-redux';
import LoggedInTrue from './LoggedInTrue';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector((state) => state.user.user);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(email.trim() && password.trim() !== '') {
      dispatch(logIn(email, password, true));
    } else {
      alert('Please enter your email and password to login')
    }
    setEmail('');
    setPassword('');
  };

  const dispatch = useDispatch();

    return (
      <div>
        {user.isLoggedIn ? 
        <LoggedInTrue /> : 
        <Container fluid>
        <Form className='mt-5 pt-5' onSubmit={onSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail" >
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" onChange={handleChangeEmail} value={email} autoFocus={true}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword" className='mt-2'>
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10} >
              <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} value={password}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mt-2'>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>}
      </div>
      
    )
}

export default Login;

