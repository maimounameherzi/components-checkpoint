import React from 'react'
import {Form} from "react-bootstrap"

function FullName() {
    return (
        <div>
        <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="Full name" placeholder="Enter your full name" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default FullName