import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
import Zoom from 'react-reveal/Zoom';

class AboutDescription extends Component {

    constructor() {
        super();
        this.state = {
            aboutDesc: '...',
            loading: true,
            error: false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.AboutInformation).then(result => {

            if (result == null) {
                this.setState({
                    error: true,
                    loading: false,
                })
            } else {
                this.setState({
                    aboutDesc: result,
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
        const aboutData = this.state.aboutDesc;
        return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col sm={12} lg={12}>
                        <Zoom>
                            { parse(aboutData) }
                        </Zoom>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    } else if(this.state.error == true) {
        return <WentWrong />
    }
  }
}

export default AboutDescription
