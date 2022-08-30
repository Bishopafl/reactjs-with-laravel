import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';

class RefundDescription extends Component {

    constructor() {
        super();
        this.state = {
            refundDesc: '...'
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.RefundInformation).then(result => {
            this.setState({
                refundDesc: result
            })
        }).catch(error => {
            this.setState({
                refundDesc: '???'
            })
        })
    }

  render() {

    const refundDataView = this.state.refundDesc;
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="mt-5">
                            <h1 className='serviceName'>Refund Policy</h1>
                            <hr />
                        </div>
                        <p className='serviceDescription refundSection'>
                            { parse(refundDataView) }
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default RefundDescription