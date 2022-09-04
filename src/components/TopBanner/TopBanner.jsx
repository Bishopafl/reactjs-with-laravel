import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Bounce from 'react-reveal/Bounce';

class TopBanner extends Component {

  constructor() {
    super();
    this.state={
      title:'',
      subtitle:'',
      loaderClass: 'text-center',
      mainDivClass: 'd-none',
    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.HomeTopTitle)
      .then(result => {
        this.setState({
          title: result[0]['home_title'],
          subtitle: result[0]['home_subtitle'],
          loaderClass: 'd-none',
          mainDivClass: 'text-center',
        });
      }).catch(error => {
        this.setState({
          title:'???', 
          subtitle:'????'
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBanner p-0'>
            <div className='topBannerOverlay'>
                <Container className='topContent'>
                    <Row>
                        <Col className={this.state.loaderClass}>
                          <Loading />
                        </Col>

                        <Col className={this.state.mainDivClass}>
                          <Bounce top>
                            <h1 className='topTitle'>{ this.state.title }</h1>
                            <h3 className='topSubTitle'>{ this.state.subtitle }</h3>
                          </Bounce>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </Fragment>
    )
  }
}

export default TopBanner