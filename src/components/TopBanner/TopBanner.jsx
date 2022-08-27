import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import HomeTopTitle from '../../RestAPI/AppUrl';

class TopBanner extends Component {

  componentDidMount() {
    axios.get(HomeTopTitle)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }




  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBanner p-0'>
            <div className='topBannerOverlay'>
                <Container className='topContent'>
                    <Row>
                        <Col className='text-center'>
                            <h1 className='topTitle'>Adam Lopez | Software Engineer</h1>
                            <h3 className='topSubTitle'>Understanding ReactJS from A - Z with Adam Lopez</h3>
                            <Button variant='primary'>Learn More</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </Fragment>
    )
  }
}

export default TopBanner