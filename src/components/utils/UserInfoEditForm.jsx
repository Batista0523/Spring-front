
import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import {
    LoginBackground3,
    LoginHeaderV2,
    LoginHeaderV3,
    LoginLabel,
    LoginButton7
} from '../../styles/loginElements'
const API = import.meta.env.VITE_API_URL

export default function UserInfoEditForm({ setCurrentUser, currentUser }) {
    const navigate = useNavigate()
    const editUser = () => {
        e.preventDefault()
        fetch(`${API}/users/${currentUser.user_id}`, {
            method: "PUT",
            body: JSON.stringify(currentUser),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then((data) => {
                if (data.error) {
                    throw new Error(data.error)
                }
                else if (data.err) {
                    throw new Error(data.err)
                }
                else {
                    alert(`User ${data.username} succesfully updated`)
                    setCurrentUser(data)
                    navigate(`/users/${data.user_id}/profile`)
                }
            })
            .catch((error) => {
                alert(error)
                console.error(error)
            })
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setUser({
            ...user,
            [name]: type === "checkbox" ? checked : value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        editUser()
    }


    return (
        <div className="form-new-user">
            <LoginBackground3 >
                <LoginLabel>
                    <LoginHeaderV3>Sign Up</LoginHeaderV3>
                </LoginLabel>

                <Form className="form" noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="username">
                            <LoginHeaderV2>Username</LoginHeaderV2>
                            <Form.Control
                                className="useLoginStyle"
                                required
                                name="username"
                                type="text"
                                placeholder="username"
                                value={user.username}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="email">
                            <LoginHeaderV2>Email</LoginHeaderV2>
                            <Form.Control
                                className="useLoginStyle"
                                name="email"
                                type="text"
                                placeholder="@"
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstname">
                            <LoginHeaderV2>First Name</LoginHeaderV2>
                            <Form.Control
                                className="useLoginStyle"
                                name="firstname"
                                type="text"
                                placeholder="first name"
                                value={user.firstname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="lastname">
                            <LoginHeaderV2>Last Name</LoginHeaderV2>
                            <Form.Control
                                className="useLoginStyle"
                                name="lastname"
                                type="text"
                                placeholder="last name"
                                value={user.lastname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="password">
                            <LoginHeaderV2>Password</LoginHeaderV2>
                            <Form.Control
                                className="useLoginStyle"
                                name="password"
                                type="text"
                                placeholder="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <br></br>
                    <br></br>
                    <LoginButton7 className="btn btn-secondary btn-sm" type="submit">
                        Update User
                    </LoginButton7>

                </Form>
            </LoginBackground3>
        </div>
    )
}