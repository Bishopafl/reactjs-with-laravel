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

class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12} xs={12}>
                    <h1 className='courseDetailsText'>Lorem ipsum dolor </h1>
                    <img className='courseDetailsImg' src="https://via.placeholder.com/750x400" alt="" />
                    <p className='mt-4 courseDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti minus quas necessitatibus maxime soluta molestiae a hic doloribus ad expedita magnam temporibus laboriosam.  <br /><br />
                    Ratione, dolore at excepturi quaerat nisi veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti minus quas necessitatibus maxime soluta molestiae a hic doloribus ad expedita magnam temporibus laboriosam, ratione, dolore at excepturi quaerat nisi veritatis. <br /><br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti minus quas necessitatibus maxime soluta molestiae a hic doloribus ad expedita magnam temporibus laboriosam, ratione, dolore at excepturi quaerat nisi veritatis.</p>
                </Col>

                <Col lg={4} md={6} sm={12} xs={12}>
                  <div className="widget_feature">
                    <h4 className="widget-title text-center">Course Features</h4>
                    <hr />
                    <ul>
                      <li>
                        <FontAwesomeIcon className='iconBullet' icon={faUser} />
                        <span> Enrolled : </span>
                        1200 studends
                      </li>

                      <li>
                        <FontAwesomeIcon className='iconBullet' icon={faClock} />
                        <span> Duration : </span>
                        2 hours
                      </li>

                      <li>
                        <FontAwesomeIcon className='iconBullet' icon={faClipboard} />
                        <span> Lectures : </span>
                        8
                      </li>

                      <li>
                        <FontAwesomeIcon className='iconBullet' icon={faClone} />
                        <span> Categories : </span>
                        Technology
                      </li>

                      <li>
                        <FontAwesomeIcon className='iconBullet' icon={faTags} />
                        <span> Tags : </span>
                        Android, Javscript
                      </li>

                      <li>
                        <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} />
                        <span> Instructor : </span>
                        Ethan Dean
                      </li>

                    </ul>
                    <div className="price-wrap text-center">
                      <h5>Price: <span>$54.00 </span></h5>
                      <Button variant='warning'>
                        Enroll Course
                      </Button>
                    </div>
                  </div>
                </Col>
            </Row>
        </Container>

        <Container className='mt-5'>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className='widget_feature'>
                <div>
                  <h1>Skills You Need</h1>  
                  <hr />
                </div>
                <Row>
                 <Col lg={6} md={6} sm={6} xs={12}>
                  <ul>
                    <li>
                      <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Lorem ipsum dolor sit
                    </li>

                    <li>
                      <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Lorem ipsum dolor sit
                    </li>

                    <li>
                      <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Lorem ipsum dolor sit
                    </li>
                  </ul>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <ul>
                    <li>
                      <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Lorem ipsum dolor sit
                    </li>

                    <li>
                      <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Lorem ipsum dolor sit
                    </li>

                    <li>
                      <FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Lorem ipsum dolor sit
                    </li>
                  </ul>
                </Col>
               </Row>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>

                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <BigPlayButton position="center" />
                </Player>

            </Col>
          </Row>
        </Container>


      </Fragment>
    )
  }
}

export default CourseDetails