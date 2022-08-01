import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import cloudnetworkIcon from '../../asset/image/cloud-network.gif';
import barchartIcon from '../../asset/image/bar-chart.gif';
import internetIcon from '../../asset/image/internet.gif'

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div>
                        <img className='cloudnetworkIcon' src={cloudnetworkIcon} />
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div>
                        <img className='barchartIcon' src={barchartIcon} />
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div>
                        <img className='internetIcon' src={internetIcon} />
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services