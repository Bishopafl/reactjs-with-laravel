import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

class TopBanner extends Component {
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