import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';

class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
        }
    }

    // two variables thats function is to set the state of the modal
    modalClose = () => this.setState({ show: false });
    modalOpen = () => this.setState({ show: true });



  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <div>
                <h1 className='serviceMainTitle'>Our Videos</h1>
                <div className="bottom"></div>
            </div>
            <Row>
                <Col lg={6} md={6} sm={12} className='videoText'>
                    <p className='serviceDescription text-start'>
                        First I would like to thank you for visiting my site today. I have been doing web design and development since October 2015.
                        <br /><br />
                        After graduating from Ironhack, a coding bootcamp in Miami, Florida, I took the skills gain learning full stack development.
                        <br /><br />
                        It was an exciting and challenging experience for me, especially due to my decision to make a complete career change.
                        <br /><br />
                        Looking back on these last years, I am grateful to the teachers and students that have taught me lessons on how to be a better developer and a better person.
                    </p>
                </Col>

                <Col lg={6} md={6} sm={12} className='videoCard'>
                    <FontAwesomeIcon onClick={this.modalOpen} className='iconProject' icon={faVideoSlash}></FontAwesomeIcon>
                </Col>
            </Row>
        </Container>

        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default Video