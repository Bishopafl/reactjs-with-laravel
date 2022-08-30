import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cloudnetworkIcon from '../../asset/image/cloud-network.gif';
import barchartIcon from '../../asset/image/bar-chart.gif';
import internetIcon from '../../asset/image/internet.gif';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Services extends Component {

  constructor() {
    super();
    this.state={
      serviceData: [],
    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Services).then(result => {
      this.setState({
        serviceData: result
      })
    }).catch(error => {
      this.setState({
        serviceData: '',
      })
    });
  }


  render() {

    const serviceDataList = this.state.serviceData;

    const serviceDataView = serviceDataList.map(serviceDataList => {
      return <Col lg={4} md={4} sm={12}>
                <div className='serviceCard text-center'>
                    <img className='cloudnetworkIcon' src={serviceDataList.service_logo} />
                    <h2 className='serviceName'>{serviceDataList.service_name}</h2>
                    <p className='serviceDescription'>{serviceDataList.service_description}</p>
                </div>
            </Col>
    });


    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>My Services</h1>
            <div className='bottom'></div>
            <Row>
                {serviceDataView}
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services