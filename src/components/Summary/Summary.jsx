import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row 
 } from 'react-bootstrap';

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
                                    <h1 className='countNumber'>66,481</h1>
                                    <h4 className='countText'>Hours coding</h4>
                                    <hr className="text-light w-25 m-auto" />
                                </Col>
                                
                                <Col>
                                    <h1 className='countNumber'>77</h1>
                                    <h4 className='countText'>Github Repositories</h4>
                                    <hr className="text-light w-25 m-auto" />
                                </Col>

                                <Col>
                                    <h1 className='countNumber'>8</h1>
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
                                    <p className="cardSubTitle text-start">Requirement Gathering</p>
                                    <p className="cardSubTitle text-start">System Analysis</p>
                                    <p className="cardSubTitle text-start">CI/CD Code Testing</p>
                                    <p className="cardSubTitle text-start">Implementtation</p>
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