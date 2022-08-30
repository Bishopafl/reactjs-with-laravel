import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';

class PrivacyDescription extends Component {

    constructor() {
        super();
        this.state = {
          privacyDesc: '...'
        }
      }
    
      componentDidMount() {
        RestClient.GetRequest(AppUrl.PrivacyInformation).then(result => {
          this.setState({
            privacyDesc: result
          })
        }).catch(error => {
          this.setState({
            privacyDesc: '???'
          })
        })
      }


  render() {
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
  }
}

export default PrivacyDescription