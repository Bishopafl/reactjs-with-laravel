import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName text-center'>Follow Us</h2>
                    <a href="#">
                      <FontAwesomeIcon 
                        icon={ faInstagram }
                        size='2x'
                      ></FontAwesomeIcon>
                    </a>
                    <a href="#">
                      <FontAwesomeIcon 
                        icon={ faDiscord }
                        size='2x'
                      ></FontAwesomeIcon>
                    </a>
                    <a href="#">
                      <FontAwesomeIcon 
                        icon={ faGithub }
                        size='2x'
                      ></FontAwesomeIcon>
                    </a>
                    <a href="#">
                      <FontAwesomeIcon 
                        icon={ faLinkedin }
                        size='2x'
                      ></FontAwesomeIcon>
                    </a>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName text-center'>Address</h2>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName text-center'>Information</h2>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName text-center'>Policy</h2>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Footer