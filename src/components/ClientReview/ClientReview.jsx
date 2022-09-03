import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class ClientReview extends Component {
  
  constructor() {
    super();
    this.state = {
      clientReviewData: [],
      loading: true,
    }
  }
  
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ClientReviewsAll).then(result => {
      this.setState({
        clientReviewData: result,
        loading: false,
      })
    }).catch(error => {
      this.setState({
        clientReviewData: '',
      })
    })
  }
  
  
  render() {
    if (this.state.loading == true) {
      return <Loading />
    } else {
      
      
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

        const clientReviewList = this.state.clientReviewData;

        const clientReviewView = clientReviewList.map(clientReviewList => {
        return <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='reviewCircleImg' src={ clientReviewList.client_img } alt="" />
                            <h2 className="reviewName">{ clientReviewList.client_title }</h2>
                            <p className="reviewDescription">{ clientReviewList.client_description }</p>
                        </Col>
                    </Row>
              </div>
        });

      return (
        <Fragment>
          <Container fluid={true} className="siderBack">
              <div className='text-center'>
                  <h1 className='reviewMainTitle p-3'>Testimonials</h1>
                  <div className="reviewBottom "></div>
              </div>
              <Slider {...settings}>
                  { clientReviewView }
              </Slider>
          </Container>
        </Fragment>
      )
    } // end else
  }
}

export default ClientReview