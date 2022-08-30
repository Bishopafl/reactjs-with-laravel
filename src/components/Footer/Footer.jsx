import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Footer extends Component {

  constructor() {
    super();
    this.state = {
      address : '.....',
      email : '.....',
      phone : '.....',
      socialOne: '....',
      socialTwo: '....',
      socialThree: '....',
      credits : '.....',
    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.FooterDataAll).then(result => {
      console.log(result[0]);
      this.setState({
        address : result[0].address,
        email : result[0].email,
        phone : result[0].phone,
        socialOne : result[0]['social-one'],
        socialTwo : result[0]['social-two'],
        socialThree : result[0]['social-three'],
        credits : result[0].footer_credits,
      })
    }).catch(error => {
      this.setState({
        address : '????',
        email : '????',
        phone : '????',
        socialOne: '....',
        socialTwo: '....',
        socialThree: '....',
        credits : '????',
      })
    })
  }


  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
            <Row>
                <Col lg={3} md={6} sm={12} xs={6} className="p-5 text-center">
                    <h2 className='footerName text-center'>Follow Us</h2>
                    <div className="socialContainer">
                      <a href={this.state.socialOne} className='social'>
                        <FontAwesomeIcon 
                          icon={ faGithub }
                          size='2x'
                        ></FontAwesomeIcon>
                      </a>
                      <a href={this.state.socialTwo} className='social'>
                        <FontAwesomeIcon 
                          icon={ faInstagram }
                          size='2x'
                        ></FontAwesomeIcon>
                      </a>
                      <a href={this.state.socialThree} className='social'>
                        <FontAwesomeIcon 
                          icon={ faLinkedin }
                          size='2x'
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={12} xs={6} className="p-5 text-justify">
                    <h2 className='footerName'>Address</h2>
                    <div className='footerDescription d-grid'>
                      <span>
                        <FontAwesomeIcon icon={faMapLocationDot} /> { this.state.address }
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} /> Email: { this.state.email }
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faPhone} /> Phone: { this.state.phone }
                      </span>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={12} xs={6} className="p-5 text-justify">
                    <h2 className='footerName'>Information</h2>
                    <div className='d-grid footerLinks'>
                    <Nav defaultActiveKey="/" className="flex-column">
                      <Nav.Link className='p-0' href="/">Home</Nav.Link>
                      <Nav.Link className='p-0' href="/about">About Me</Nav.Link>
                      <Nav.Link className='p-0' href="/artwork">Artwork</Nav.Link>
                      <Nav.Link className='p-0' href="/contact">Contact Us</Nav.Link>
                    </Nav>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={12} xs={6} className="p-5 text-justify">
                    <h2 className='footerName'>Policy</h2>
                    <div className='d-grid footerLinks'>
                    <Nav className="flex-column">
                      <Nav.Link className='p-0' href="/refund">Refund Policy</Nav.Link>
                      <Nav.Link className='p-0' href="/terms-and-conditions">Terms And Conditions</Nav.Link>
                      <Nav.Link className='p-0' href="/privacy">Privacy Policy</Nav.Link>
                    </Nav>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container fluid={true} className='text-center copyrightSection'>
          <a className='copyrightLink' href="#">{ this.state.credits }</a>
        </Container>
      </Fragment>
    )
  }
}

export default Footer