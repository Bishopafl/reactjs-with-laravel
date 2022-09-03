import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class Services extends Component {

  constructor() {
    super();
    this.state={
      serviceData: [],
      loaded: true,
    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Services).then(result => {
      this.setState({
        serviceData: result,
        loaded: false
      })
    }).catch(error => {
      this.setState({
        serviceData: '',
      })
    });
  }


  render() {

    if (this.state.loaded == true) {
      return <Loading />
    } else {

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
    } // end else
  }
}

export default Services