import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import faceImage from '../../asset/image/face.png';
import TypeIt from 'typeit-react';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';

class AboutMe extends Component {

  render() {
    return (
      <Fragment>
        <Container className='text-center mt-5'>
            <Bounce>
                <h1 className='serviceMainTitle'>About Me</h1>
            </Bounce>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='aboutMeImage'>
                        <Roll>
                            <img className='aboutImg' src={faceImage } alt="" />
                        </Roll>
                    </div>
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <div className='aboutMeBody'>
                        <h2 className='aboutMeDetails'>Hi there, I'm</h2>
                        <h2 className='aboutMeTitle'>Adam Lopez</h2>
                        <h3 className='aboutMeDetails'>Working as <br />
                            <TypeIt
                                options={{
                                    strings: [
                                        "a Developer,",
                                        "Programmer,",
                                        "Father,",
                                        "Husband,",
                                        "and Student"
                                    ],
                                    speed: 100,
                                    waitUntilVisible: true,
                                    loop: true
                                }}
                            />
                            <span id="aboutMeListDetails"></span>
                        </h3>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutMe