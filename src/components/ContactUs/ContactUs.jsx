import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';

class ContactUs extends Component {

  constructor() {
    super();
    this.state = {
      address : '.....',
      email : '.....',
      phone : '.....',
      loading: true,
    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.FooterDataAll).then(result => {
      this.setState({
        address : result[0].address,
        email : result[0].email,
        phone : result[0].phone,
        loading: false,
      })
    }).catch(error => {
      this.setState({
        address : '????',
        email : '????',
        phone : '????',
      })
    })
  }

  sendContact() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    const jsonObject = {name: name, email: email, message: message};

    RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)).then(result => {
      alert('Mail sent!')
    }).catch(error => {
      alert('error bruh... bummer.');
    });

  }

    render() {

      if (this.state.loading == true ) {
        return <Loading />
      } else {       
        return (
          <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <h1 className='serviceName'>Quick Connect</h1>
                        <Form>
                            <Form.Group className='pb-3'>
                                <Form.Control id="name" column='sm' type="name" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className='pb-3'>
                                <Form.Control id="email" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className='pb-3'>
                                <Form.Control id="message" rows={3} as="textarea" placeholder="Enter Your Message" />
                            </Form.Group>
                            <Button onClick={(this.sendContact)} variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Zoom right>
                        <h1 className='serviceName'>Discuss with Us</h1>
                        <div className='serviceDescription d-grid'>
                          <span>
                            <FontAwesomeIcon icon={faMapLocationDot} /> {this.state.address}
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.email}
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faPhone} /> Phone: {this.state.phone}
                          </span>
                        </div>
                      </Zoom>
                    </Col>
                </Row>
            </Container>
          </Fragment>
        )
    }
  } // end else 
}

export default ContactUs