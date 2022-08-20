import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projectDetailsImage from '../../asset/image/pdetails.png';
class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <h1>Project Details</h1>
                    <img src={projectDetailsImage} alt="" />
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                    <h1>Project Details</h1>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails