import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

class ClientReview extends Component {
  render() {
    // only load one slider when component is rendered
    var settings = {
        autoPlay: true, // sets autoplay
        autoPlaySpeed: 3000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 3000,
        vertical: true, // enables vertical slide
        verticalSwiping: true, // enables vertical swipe
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1 
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
      <Fragment>
        <Container fluid={true} className="siderBack">
            <div className='text-center'>
                <h1 className='reviewMainTitle p-3'>Testimonials</h1>
                <div className="reviewBottom "></div>
            </div>
            <Slider {...settings}>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='reviewCircleImg' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=1480&t=st=1659838535~exp=1659839135~hmac=98662e4a5107cb7db62126585da6cef2b29de6fa22230e326805cb683572647d" alt="" />
                            <h2 className="reviewName">Noah Lopez</h2>
                            <p className="reviewDescription">First I would like to thank you for visiting my site today. I have been doing web design and development since October 2015.</p>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='reviewCircleImg' src="https://img.freepik.com/free-photo/portrait-young-pretty-cheerful-girl-smiling_176420-9553.jpg?size=626&ext=jpg&uid=R44347709&ga=GA1.2.1801485300.1659553021" alt="" />
                            <h2 className="reviewName">Ava Lopez</h2>
                            <p className="reviewDescription">First I would like to thank you for visiting my site today. I have been doing web design and development since October 2015.</p>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='reviewCircleImg' src="https://img.freepik.com/premium-photo/face-happy-young-beautiful-indian-woman-smiling-park-outdoors_251136-24645.jpg?w=740" alt="" />
                            <h2 className="reviewName">Priscilla Lopez</h2>
                            <p className="reviewDescription">First I would like to thank you for visiting my site today. I have been doing web design and development since October 2015.</p>
                        </Col>
                    </Row>
                </div>
            </Slider>
        </Container>
      </Fragment>
    )
  }
}

export default ClientReview