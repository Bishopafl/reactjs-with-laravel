import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

class Services extends Component {

  constructor() {
    super();
    this.state={
      serviceData: [],
      loading: true,
    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Services).then(result => {
      this.setState({
        serviceData: result,
        loading: false
      })
    }).catch(error => {
      this.setState({
        serviceData: '',
      })
    });
  }


  render() {

    if (this.state.loading == true) {
      return <Loading />
    } else {

      const serviceDataList = this.state.serviceData;

      const serviceDataView = serviceDataList.map(serviceDataList => {
        return <Col lg={4} md={4} sm={12}>
                <Zoom top>
                    <div className='serviceCard text-center'>
                        <img className='cloudnetworkIcon' src={serviceDataList.service_logo} />
                        <h2 className='serviceName'>{serviceDataList.service_name}</h2>
                        <p className='serviceDescription'>{serviceDataList.service_description}</p>
                    </div>
                    </Zoom>
                </Col>
      });


      return (
        <Fragment>
          <Container className='text-center'>
              <Bounce>
                <h1 className='serviceMainTitle'>My Services</h1>
              </Bounce>
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