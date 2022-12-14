import React, { Component, Fragment } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import courseAngularMicroservice from '../../asset/image/courses/angular-laravel-microservice.jpeg';
import courseAngularZeroToMastery from '../../asset/image/courses/angular-zero-to-mastery.jpeg';
import courseThreeJs from '../../asset/image/courses/threejs.png';
import courseReactLaravel from '../../asset/image/courses/reactjs-laravel.png';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

class Courses extends Component {

    constructor() {
        super();
        this.state={
            courseData:[],
            loaded: true,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result => {
            this.setState({
                courseData: result,
                loaded: false,
            })
        }).catch(error => {
            this.setState({
                courseData: '',
            })
        });
    }


  render() {

    if (this.state.loaded == true) {
        return <Loading />
    } else {

        const courseDataList = this.state.courseData;
        const courseDataView = courseDataList.map(courseDataList => {
            return <Col lg={6} md={12} sm={12}>
                <Zoom>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-2'>
                            <img className='courseImg' src={courseDataList.small_img} alt="" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName'>{ courseDataList.short_title }</h5>
                            <p className='serviceDescription'>{ courseDataList.short_description }</p>
                            <Nav.Link className='courseViewMore' href={'/coursedetails/'+courseDataList.id+'/'+courseDataList.short_title}>View Details</Nav.Link>
                        </Col>
                    </Row>
                </Zoom>
            </Col>
        });

        return (
        <Fragment>
            <Container className="mt-5">
                <div className='text-center'>
                    <Bounce>
                        <h1 className="serviceMainTitle">Current Learnings</h1>
                    </Bounce>
                    <div className="bottom"></div>
                </div>
                <Row>
                    { courseDataView }
                </Row>
            </Container>
        </Fragment>
        )
    } // end else
  }
}

export default Courses