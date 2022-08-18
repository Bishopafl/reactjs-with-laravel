import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cardImageOne from '../../asset/image/page1.png';
import cardImageTwo from '../../asset/image/page2.png';
import cardImageThree from '../../asset/image/page3.png';
import lightBulbIcon from '../../asset/image/welcome/animat-lightbulb-color.gif';
import lineChartIcon from '../../asset/image/welcome/animat-linechart-color.gif';
import responsiveIcon from '../../asset/image/welcome/animat-responsive-color.gif';

class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className='intro-area--top'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                <div className='section-title text-center'>
                    <div className='intro-area--inner'>
                        <h6 className='sub-title double-line'>WELCOME</h6>
                        <h2 className='maintitle'>
                            How May I Assist You?
                        </h2>


                        <Container className='text-center mt-5'>
                            <Row>
                                <Col lg={4} md={6} sm={12} xs={12}>
                                    <img src={cardImageOne} alt="column 1 image" />
                                    <h1 className='serviceName' >Design</h1>
                                    <p className='serviceDescription'>Lorem ipsum dolor sit amet adipisicing elit.</p>
                                </Col>

                                <Col lg={4} md={6} sm={12} xs={12}>
                                    <img src={cardImageTwo} alt="column 2 image" />
                                    <h1 className='serviceName'>Develop</h1>
                                    <p className='serviceDescription'>Lorem ipsum dolor, sit amet adipisicing elit.</p>
                                </Col>

                                <Col lg={4} md={6} sm={12} xs={12}>
                                    <img src={cardImageThree} alt="column 3 image" />
                                    <h1 className='serviceName'>Support</h1>
                                    <p className='serviceDescription'>Lorem ipsum dolor, sit amet adipisicing elit.</p>
                                </Col>
                            </Row>

                            {/* welcome footer start */}
                        
                            <Row className='welcomeFooter text-center mt-5'>
                                <Col lg={4} md={6} sm={12} xs={12}>
                                    <Row>
                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <img className='welcomeLightBulbIcon' src={lightBulbIcon} alt="" />
                                        </Col>

                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <h5 className='text-start welcomeIntro'>Development</h5>
                                            <p className='text-start serviceDescription'>Lorem ipsum dolor</p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={4} md={6} sm={12} xs={12}>
                                    <Row>
                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <img className='welcomeLightBulbIcon' src={responsiveIcon} alt="" />
                                        </Col>

                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <h5 className='text-start welcomeIntro'>Web Design</h5>
                                            <p className='text-start serviceDescription'>Lorem ipsum dolor</p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={4} md={6} sm={12} xs={12}>
                                    <Row>
                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <img className='welcomeLightBulbIcon' src={lineChartIcon} alt="" />
                                        </Col>

                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <h5 className='text-start welcomeIntro'>Analytics</h5>
                                            <p className='text-start serviceDescription'>Lorem ipsum dolor</p>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
                </Col>
                
            </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default Welcome