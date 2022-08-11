import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import githubCatImage from '../../asset/image/github.gif';
import atlantaChiroImage from '../../asset/image/atl-chiro.gif';
import linkedInImage from '../../asset/image/linkedin.gif';

class AllProjects extends Component {
  render() {
    return (
        <Fragment>
        <Container className='text-center'>
            <h1 className='seviceMainTitle'>Recent Projects</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img className='githubCatCard' />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img variant="top" style={{height: '200px'}} src={atlantaChiroImage} />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img variant="top" style={{height: '200px'}} src={linkedInImage} />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img className='githubCatCard' />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img className='githubCatCard' />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <Card className='projectCard'>
                        <Card.Img className='githubCatCard' />
                        <Card.Body>
                            <Card.Title className='serviceName'>Card Title</Card.Title>
                            <Card.Text className='serviceDescription'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
      </Fragment>
    )
  }
}

export default AllProjects