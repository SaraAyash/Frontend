import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
// import LoginForm from './LoginForm';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            {/* <LoginForm setToken={setToken}/>  */}


            <Form>
                <Form.Group className="mb-2 mt-2"  >
                    <Form.Label>  <h1>Please Log In</h1></Form.Label>
                </Form.Group>

                <Form.Group className="mb-2"  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={e => setUserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button className="mt-2" variant="primary" type="submit" onClick={(e) => { handleSubmit(e) }}>
                    Submit
                </Button>
            </Form>

            
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};