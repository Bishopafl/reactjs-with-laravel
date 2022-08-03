import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row 
 } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import calendarIcon from '../../asset/image/calendar.gif';
import networkIcon from '../../asset/image/network.gif';
import waterIcon from '../../asset/image/water.gif';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='summaryBanner p-0'>
            <div className='summaryBannerOverlay'>
                <Container className='text-center'>
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                            <Row className='countSection'>
                                <Col>
                                    <img className='summaryIcon' src={calendarIcon} />
                                    <h1 className='countNumber'>
                                        <CountUp start={0} end={66481}>
                                            {({ countUpRef, start }) => (    
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>  
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className='countText'>Hours coding</h4>
                                    <hr className="text-light w-25 m-auto" />
                                </Col>
                                
                                <Col>
                                    <img className='summaryIcon' src={networkIcon} />
                                    <h1 className='countNumber'>
                                        <CountUp start={0} end={77}>
                                            {({ countUpRef, start }) => (    
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>  
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className='countText'>Github Repositories</h4>
                                    <hr className="text-light w-25 m-auto" />
                                </Col>

                                <Col>
                                    <img className='summaryIcon' src={waterIcon} />
                                    <h1 className='countNumber'>
                                        <CountUp start={0} end={8}>
                                            {({ countUpRef, start }) => (    
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>  
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className='countText'>Cups of water daily</h4>
                                    <hr className="text-light w-25 m-auto" />
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            

                            <Card className='workCard'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>What I Have Achieved</Card.Title>
                                    <Card.Text>
                                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Requirement Gathering</p>
                                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Requirement Gathering</p>
                                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> System Analysis</p>
                                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> CI/CD Code Testing</p>
                                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Implementtation</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>


                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </Fragment>
    )
  }
}

export default Summary