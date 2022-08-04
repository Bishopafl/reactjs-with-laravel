import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Video extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <h1>text</h1>
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <h1>Video</h1>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Video