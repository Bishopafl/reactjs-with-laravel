import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

class RefundDescription extends Component {

    constructor() {
        super();
        this.state = {
            refundDesc: '...',
            loading: true,
            error: false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.RefundInformation).then(result => {
            if (result == null) {
                this.setState({
                    error: true,
                })
            } else {
                this.setState({
                    refundDesc: result,
                    loading: false,
                });
            }
        }).catch(error => {
            this.setState({
                error: true,
            })
        });
    }

  render() {

    if (this.state.loading == true) {
        return <Loading />
    } else if(this.state.loading == false) {

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
    } else if(this.state.error == true) {
        return <WentWrong />
    }
    // end else
  }
}

export default RefundDescription