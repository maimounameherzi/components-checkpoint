import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'

function Address() {
    return (
        <div>
            Adress:
            <Form>
                <Row>
                    <Col xs={7}>
                        <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Zip" />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Address