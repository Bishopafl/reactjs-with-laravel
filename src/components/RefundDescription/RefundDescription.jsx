import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';

class RefundDescription extends Component {

    constructor() {
        super();
        this.state = {
            refundDesc: '...',
            loading: true,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.RefundInformation).then(result => {
            this.setState({
                refundDesc: result,
                loading: false,
            })
        }).catch(error => {
            this.setState({
                refundDesc: '???'
            })
        })
    }

  render() {

    if (this.state.loading === true) {
        return <Loading />
    } else {

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
    } // end else
  }
}

export default RefundDescription