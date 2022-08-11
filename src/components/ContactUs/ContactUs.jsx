import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <h1 className='serviceName'>Quick Connect</h1>
                    <Form>
                        <Form.Group className='pb-3'>
                            <Form.Label className="text-muted">Type your Name</Form.Label>
                            <Form.Control column='sm' type="name" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className="text-muted">Type your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className='pb-3'>
                            <Form.Label className="text-muted">Type your Message</Form.Label>
                            <Form.Control rows={3} as="textarea" placeholder="Enter Your Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                    <h1 className='serviceName'>Discuss with Us</h1>
                    <div className='serviceDescription d-grid'>
                      <span>
                        <FontAwesomeIcon icon={faMapLocationDot} /> Tampa, Florida
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} /> Email: adamf04@gmail.com
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faPhone} /> Phone: 8135008808
                      </span>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ContactUs