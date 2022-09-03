import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoaderIcon from '../../asset/image/Ripple.svg';

class Loading extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                    <img className='loader-animation' src={LoaderIcon} alt="" />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Loading