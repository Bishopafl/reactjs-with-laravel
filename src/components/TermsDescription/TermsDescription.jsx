import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';

class TermsDescription extends Component {

    constructor() {
        super();
        this.state = {
            termsDesc: '...'
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.TermsInformation).then(result => {
            this.setState({
                termsDesc: result
            })
        }).catch(error => {
            this.setState({
                termsDesc: '???'
            })
        });
    }

  render() {
    const termsData = this.state.termsDesc;
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
                    { parse(termsData) }
                </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default TermsDescription