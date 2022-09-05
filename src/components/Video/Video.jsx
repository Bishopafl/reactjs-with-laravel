import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { BigPlayButton, Player } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            video_description: '',
            video_url: '',
            loading: true,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeVideo).then(result => {
            this.setState({
                video_description: result[0].video_description,
                video_url: result[0].video_url,
                loading: false,
            })
        }).catch(error => {
            this.setState({
                video_description: '???',
                video_url: '',
            })
        })
    }

    // two variables thats function is to set the state of the modal
    modalClose = () => this.setState({ show: false });
    modalOpen = () => this.setState({ show: true });

  render() {

    if (this.state.loading == true) {
      return <Loading />
    } else {
        return (
        <Fragment>
            <Container className='text-center mt-5'>
                <div>
                    <Bounce>
                        <h1 className='serviceMainTitle'>Our Videos</h1>
                    </Bounce>
                    <div className="bottom"></div>
                </div>
                <Row>
                    <Col lg={6} md={6} sm={12} className='videoText'>
                        <Zoom>
                            <div className='serviceDescription text-start'>
                                { parse(this.state.video_description) }
                            </div>
                        </Zoom>
                    </Col>

                    <Col lg={6} md={6} sm={12} className='videoCard'>
                        <FontAwesomeIcon onClick={this.modalOpen} className='iconProject' icon={faVideoSlash}></FontAwesomeIcon>
                    </Col>
                </Row>
            </Container>

            <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                <Modal.Body>
                    <Player src={ this.state.video_url} >
                        <BigPlayButton position="center" />
                    </Player>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.modalClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
        )
    } // end else
  }
}

export default Video