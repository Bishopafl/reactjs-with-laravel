import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import errorIcon from '../../asset/image/Error.svg';

class WentWrong extends Component {
  render() {
    return (
      <Fragment>
        <Container >
            <Row>
                <Col>
                    <img className='error-icon' src={errorIcon} alt="" />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default WentWrong