import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedPage p-0'>
            <div className='topPageOverlay'>
                <Container className='topContentPage'>
                    
                    <Row>
                        <Col className='text-center'>
                            
                            <h3 className='topPageTitle'>{this.props.pageTitle}</h3>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
      </Fragment>
    )
  }
}

export default PageTop
