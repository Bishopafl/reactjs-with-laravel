import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cloudnetworkIcon from '../../asset/image/cloud-network.gif';
import barchartIcon from '../../asset/image/bar-chart.gif';
import internetIcon from '../../asset/image/internet.gif';

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>My Services</h1>
            <div className='bottom'></div>

            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img alt='CloudConfig' className='cloudnetworkIcon' src={cloudnetworkIcon} />
                        <h2 className='serviceName'>Cloud Configuration</h2>
                        <p className='serviceDescription'>Configuring and deploying web applications via cloud services such as AWS</p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img alt='LeadConversion' className='barchartIcon' src={barchartIcon} />
                        <h2 className='serviceName'>Lead Conversion</h2>
                        <p className='serviceDescription'>Increate web conversion and lead generation through easy-to-use interfaces</p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img alt='SecureNetwork' className='internetIcon' src={internetIcon} />
                        <h2 className='serviceName'>Secure Networks</h2>
                        <p className='serviceDescription'>Clients recieve immediate up-to-date alerts based on performance of application</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services