import React, { Component, Fragment } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import courseAngularMicroservice from '../../asset/image/courses/angular-laravel-microservice.jpeg';
import courseAngularZeroToMastery from '../../asset/image/courses/angular-zero-to-mastery.jpeg';
import courseThreeJs from '../../asset/image/courses/threejs.png';
import courseReactLaravel from '../../asset/image/courses/reactjs-laravel.png';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import WentWrong from '../../components/WentWrong/WentWrong';

class AllCourses extends Component {
    constructor() {
        super();
        this.state = {
            allCourseData : [],
            loading: true,
            error: false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseAll).then(result => {

            if (result == null) {
                this.setState({
                    error: true,
                    loading: false,
                });
            } else {
                this.setState({
                    allCourseData: result,
                    loading: false,
                });
            }
        }).catch(error => {
            this.setState({
                allCourseData: '',
                error: true,
            });
        });
    }


  render() {
    if (this.state.loading == true) {
            return <Loading />
    } else if(this.state.loading == false) {
        const allCoursesList = this.state.allCourseData;
        const allCoursesView = allCoursesList.map(allCoursesList => {
            return <Col lg={6} md={12} sm={12}>
                <Row>
                    <Col lg={6} md={6} sm={12} className='p-2'>
                        <img className='courseImg' src={allCoursesList.small_img} alt="" />
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <h5 className='serviceName'>Angular 8 Full Stack</h5>
                        <p className='serviceDescription'>Breaking a monolith into microservices</p>
                        <Nav.Link className='courseViewMore' href={'/coursedetails/'+allCoursesList.id+'/'+allCoursesList.short_title}>View Details</Nav.Link>
                    </Col>
                </Row>
            </Col>
        });

        return (
        <Fragment>
            <Container>
                <div className='text-center'>
                    <h1 className="serviceMainTitle">Current Learnings</h1>
                    <div className="bottom"></div>
                </div>
                <Row>
                    {allCoursesView}
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

export default AllCourses
