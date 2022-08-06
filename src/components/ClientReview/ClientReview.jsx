import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class ClientReview extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="siderBack">
            <div className='text-center'>
                <h1 className='reviewMainTitle p-3'>Testimonials</h1>
                <div className="reviewBottom "></div>
            </div>
            <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                    <img className='reviewCircleImg' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-144251.jpg?w=1380&t=st=1659804907~exp=1659805507~hmac=4148f1b5461d5326b0a21c73ef571c48e7408d8effd6c9143dcc85ce4a7a2f20" alt="" />
                    <h2 className="reviewName">Noah Lopez</h2>
                    <p className="reviewDescription">First I would like to thank you for visiting my site today. I have been doing web design and development since October 2015.</p>
                </Col>

            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ClientReview