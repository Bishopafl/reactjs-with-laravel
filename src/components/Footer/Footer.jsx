import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
            <Row>
                <Col lg={3} md={6} sm={12} className="p-5 text-center">
                    <h2 className='footerName text-center'>Follow Us</h2>
                    <div className="socialContainer">
                      <a href="#" className='github social'>
                        <FontAwesomeIcon 
                          icon={ faGithub }
                          size='2x'
                        ></FontAwesomeIcon>
                      </a>
                      <a href="#" className='discord social'>
                        <FontAwesomeIcon 
                          icon={ faDiscord }
                          size='2x'
                        ></FontAwesomeIcon>
                      </a>
                      <a href="#" className='linkedin social'>
                        <FontAwesomeIcon 
                          icon={ faLinkedin }
                          size='2x'
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h2 className='footerName text-center'>Address</h2>
                    <div className='footerDescription d-grid'>
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

                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h2 className='footerName text-center'>Information</h2>
                    <div className='d-grid footerLinks'>
                      <a href="">About Me</a>
                      <a href="">My Profile</a>
                      <a href="">Contact Us</a>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h2 className='footerName text-center'>Policy</h2>
                    <div className='d-grid footerLinks'>
                      <a href="">Refund Policy</a>
                      <a href="">Terms And Condition</a>
                      <a href="">Privacy Policy</a>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Footer