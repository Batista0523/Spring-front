
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
    LoginButton2
} from '../styles/loginElements'
import "animate.css"
const API = import.meta.env.VITE_API_URL

export default function UserInfoEditForm({ setCurrentUser, currentUser }) {
    const [user,setUser] = useState(currentUser)
    const navigate = useNavigate()
    const editUser = () => {
        e.preventDefault()
        fetch(`${API}/users/${currentUser.user_id}`, {
            method: "PUT",
            body: JSON.stringify(user),
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
        <div className="form-new-user animate__animated animate__zoomInLeft">
            <LoginBackground3 >
                <LoginLabel>
                    
                </LoginLabel>

                <Form className="form" noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="username">
                            <Form.Control
                                className="useLoginStyle"
                                required
                                name="username"
                                type="text"
                                placeholder="username"
                                value={currentUser.username}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="email">
                            <Form.Control
                                className="useLoginStyle"
                                name="email"
                                type="text"
                                placeholder="@"
                                value={currentUser.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstname">
                            <Form.Control
                                className="useLoginStyle"
                                name="firstname"
                                type="text"
                                placeholder="first name"
                                value={currentUser.firstname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="lastname">
                            <Form.Control
                                className="useLoginStyle"
                                name="lastname"
                                type="text"
                                placeholder="last name"
                                value={currentUser.lastname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="password">
                            <Form.Control
                                className="useLoginStyle"
                                name="password"
                                type="text"
                                placeholder="password"
                                value={currentUser.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>
                    <br></br>
                    <br></br>
                    <LoginButton2 className="btn btn-secondary btn-sm" type="submit">
                        Update User
                    </LoginButton2>

                </Form>
            </LoginBackground3>
        </div>
    )
}