import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setformData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors
        try {
            const response = await fetch("https://jwtauthentication-6.onrender.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "Login failed");
            }

            console.log(result);
            localStorage.setItem("token", result.token); // Save token
            navigate("/dashboard");
        } catch (error) {
            console.error(error.message);
            setErrorMessage(error.message); // Display error to the user
        } finally {
            setformData({
                email: "",
                password: "",
            });
        }
    };

    return (
        <div className="center-form">
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        isInvalid={!formData.email.includes("@") && formData.email !== ""}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        isInvalid={formData.password.length < 6 && formData.password !== ""}
                    />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;

