import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                    <div className='page_404'>
                        <Row>
                            <Col>
                                <div className="four_zero_four_bg"></div>
                                <div className="contant_box_404">
                                <h1 className="text-center notFoundMainTitle">404</h1>
                                    <h3>Looks like you are lost...</h3>
                                </div>
                                <p>the page you are looking for not avaible!</p>
                                <a href={'/'} class="link_404">Go to Home</a>
                            </Col>
                        </Row>
                    </div>
                
               
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NotFound