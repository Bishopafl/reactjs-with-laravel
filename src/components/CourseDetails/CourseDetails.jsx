import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import 'video-react/dist/video-react.cjs'
import { BigPlayButton, Player } from 'video-react'
import HTMLReactParser from 'html-react-parser'
import ContactUs from '../ContactUs/ContactUs'
import Courses from '../Courses/Courses'
import Loading from '../Loading/Loading'

class CourseDetails extends Component {

  constructor(props) {
    super();
    this.state = {
      loading: true,
    }
  }


  render() {


    let shortTitle = '';
    let longTitle = '......';
    let longDescription = '......';
    let totalFeatureOne = '';
    let totalFeatureTwo = '';
    let totalFeatureThree = '';
    let totalFeatureFour = '';
    let totalFeatureFive = '';
    let allFeatures = '......';
    let videoUrl = '';
    let smallImg = '';

    let courseDetailsArray = this.props.courseData;

    if (courseDetailsArray.length == 1) {
      shortTitle = courseDetailsArray[0]['short_title'];
      longTitle = courseDetailsArray[0]['long_title'];
      longDescription = courseDetailsArray[0]['long_description'];
      totalFeatureOne = courseDetailsArray[0]['total_feature_one'];
      totalFeatureTwo = courseDetailsArray[0]['total_feature_two'];
      totalFeatureThree = courseDetailsArray[0]['total_feature_three'];
      totalFeatureFour = courseDetailsArray[0]['total_feature_four'];
      totalFeatureFive = courseDetailsArray[0]['total_feature_five'];
      allFeatures = courseDetailsArray[0]['all_features'];
      videoUrl = courseDetailsArray[0]['video_url'];
      smallImg = courseDetailsArray[0]['small_img'];
      this.state.loading = false;
    }

    if(this.state.loading == true) {
      return <Loading />
    } else {

      return (
        <Fragment>
          <Container className='mt-5'>
              <Row>
                  <Col lg={8} md={6} sm={12} xs={12}>
                      <h1 className='courseDetailsText'>{ longTitle }</h1>
                      <img className='courseDetailsImg' src={ smallImg } alt="" />
                      <p className='mt-4 courseDescription'>{ HTMLReactParser(longDescription) }</p>
                  </Col>

                  <Col lg={4} md={6} sm={12} xs={12}>
                    <div className="widget_feature">
                      <h4 className="widget-title text-center">Course Features</h4>
                      <hr />
                      <ul>
                        <li>
                          <FontAwesomeIcon className='iconBullet' icon={faUser} />
                          <span> Enrolled : </span>
                          { totalFeatureOne }
                        </li>

                        <li>
                          <FontAwesomeIcon className='iconBullet' icon={faClock} />
                          <span> Duration : </span>
                          { totalFeatureTwo }
                        </li>

                        <li>
                          <FontAwesomeIcon className='iconBullet' icon={faClipboard} />
                          <span> Lectures : </span>
                          { totalFeatureThree }
                        </li>

                        <li>
                          <FontAwesomeIcon className='iconBullet' icon={faClone} />
                          <span> Categories : </span>
                          { totalFeatureFour }
                        </li>

                        <li>
                          <FontAwesomeIcon className='iconBullet' icon={faTags} />
                          <span> Tags : </span>
                          { totalFeatureFive }
                        </li>

                      </ul>
                      <div className="price-wrap text-center">
                        <h2>Skills Gained</h2>
                        <div className='text-start'>
                          { HTMLReactParser(allFeatures) }
                        </div>
                        <Button variant='warning' href={videoUrl}>
                          View Course
                        </Button>
                      </div>
                    </div>
                  </Col>
              </Row>
          </Container>

          <Courses />

        </Fragment>
      )
    } // end else
  }
}

export default CourseDetails