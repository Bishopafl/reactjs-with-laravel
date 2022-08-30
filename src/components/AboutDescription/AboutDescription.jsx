import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';

class AboutDescription extends Component {

    constructor() {
        super();
        this.state = {
            aboutDesc: '...'
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.AboutInformation).then(result => {
            this.setState({
                aboutDesc: result,
            })
        }).catch(error => {
            this.setState({
                aboutDesc: '????'
            })
        });
    }



  render() {
    const aboutData = this.state.aboutDesc;
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col sm={12} lg={12}>
                    { parse(aboutData) }
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutDescription
