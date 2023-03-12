import React, { useState } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import "./Login.css";
import axios from "axios";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <Layout title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="my-3 w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-1">
          <Col>
            New User ? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Login;
