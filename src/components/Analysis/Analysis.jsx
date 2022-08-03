import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export class Analysis extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <div className='text-center'>
            <h1 className='serviceMainTitle'>Technology Used</h1>
            </div>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <h1>BarChart</h1>
                </Col>

                <Col lg={6} md={12} sm={12}>
                    <p className='text-justify serviceDescription'>First I would like to thank you for visiting my site today. I have been doing web design and development since October 2015.
                    <br /><br />
                    After graduating from Ironhack, a coding bootcamp in Miami, Florida, I took the skills gain learning full stack development.
                    <br /><br />
                    It was an exciting and challenging experience for me, especially due to my decision to make a complete career change.
                    <br /><br />
                    Looking back on these last years, I am grateful to the teachers and students that have taught me lessons on how to be a better developer and a better person.
                    </ p>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Analysis