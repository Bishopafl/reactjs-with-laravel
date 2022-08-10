import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import courseAngularMicroservice from '../../asset/image/courses/angular-laravel-microservice.jpeg';
import courseAngularZeroToMastery from '../../asset/image/courses/angular-zero-to-mastery.jpeg';
import courseThreeJs from '../../asset/image/courses/threejs.png';
import courseReactLaravel from '../../asset/image/courses/reactjs-laravel.png';

class AllCourses extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <div className='text-center'>
                <h1 className="serviceMainTitle">Current Learnings</h1>
                <div className="bottom"></div>
            </div>
            
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseAngularMicroservice} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>Angular 8 Full Stack</h5>
                            <p className='serviceDescription'>Breaking a monolith into microservices</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>

                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseAngularZeroToMastery} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>Angular 8 </h5>
                            <p className='serviceDescription'>Zero to Mastery. Learn Angular.</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>
            </Row>

            

            <Row>
                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseThreeJs} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>Three JS</h5>
                            <p className='serviceDescription'>Implementing metaverse dimensions onto websites</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>

                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseReactLaravel} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>ReactJS Full Stack</h5>
                            <p className='serviceDescription'>A - Z course with React JS front end with Laravel backend</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseAngularMicroservice} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>Angular 8 Full Stack</h5>
                            <p className='serviceDescription'>Breaking a monolith into microservices</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>

                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseAngularZeroToMastery} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>Angular 8 </h5>
                            <p className='serviceDescription'>Zero to Mastery. Learn Angular.</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>
            </Row>



            <Row>
                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseThreeJs} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>Three JS</h5>
                            <p className='serviceDescription'>Implementing metaverse dimensions onto websites</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>

                <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseReactLaravel} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>ReactJS Full Stack</h5>
                            <p className='serviceDescription'>A - Z course with React JS front end with Laravel backend</p>
                            <a href="#" className="courseViewMore">View Details</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AllCourses
