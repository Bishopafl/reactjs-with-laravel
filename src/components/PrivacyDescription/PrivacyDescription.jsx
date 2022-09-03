import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';

class PrivacyDescription extends Component {

    constructor() {
        super();
        this.state = {
          privacyDesc: '...',
          loading: true,
        }
      }
    
      componentDidMount() {
        RestClient.GetRequest(AppUrl.PrivacyInformation).then(result => {
          this.setState({
            privacyDesc: result,
            loading: false,
          })
        }).catch(error => {
          this.setState({
            privacyDesc: '???'
          })
        })
      }


  render() {
    if (this.state.loading) {
      return <Loading />
    } else {

      const privacyDataView = this.state.privacyDesc;
      return (
        <Fragment>
          <Container>
              <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                  <div className="mt-5">
                      <h1 className='serviceName'>Terms and Conditions</h1>
                      <hr />
                  </div>
                  <div className='serviceDescription refundSection'>
                      { parse(privacyDataView) }
                  </div>
                  </Col>
              </Row>
          </Container>
        
        </Fragment>
      )
    } // end else
  }
}

export default PrivacyDescription