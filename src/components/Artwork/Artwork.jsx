import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoAlbum from 'react-photo-album';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Bounce from 'react-reveal/Bounce';
import ballpoint from '../../asset/image/artwork/ball-point.jpg';
import compDesign from '../../asset/image/artwork/computer-design.jpg';
import doodle from '../../asset/image/artwork/doodle.jpg';
import flowerTwo from '../../asset/image/artwork/flower-of-life-2.jpg';
import flowerOne from '../../asset/image/artwork/flower-of-life.jpg';
import godfather from '../../asset/image/artwork/godfather.jpg';
import manatee from '../../asset/image/artwork/manatee.jpg';
import metatronsCube from '../../asset/image/artwork/metatrons-cube.jpg';
import mixedMedia from '../../asset/image/artwork/mixed-media.jpg';
import naruto from '../../asset/image/artwork/naruto-doodle.jpg';
import octopus from '../../asset/image/artwork/octopus.jpg';
import pantherTwo from '../../asset/image/artwork/panther-2.jpg';
import pantherOne from '../../asset/image/artwork/panther.jpg';
import penInk from '../../asset/image/artwork/pen-ink.jpg';
import scratch from '../../asset/image/artwork/scratch-board.jpg';
import spider from '../../asset/image/artwork/spider.jpg';
import sriYantra from '../../asset/image/artwork/sri-yantra.jpg';
import stippleOne from '../../asset/image/artwork/stipple.jpg';
import stippleTwo from '../../asset/image/artwork/stipple-2.jpg';
import negSpace from '../../asset/image/artwork/negative-space-1.jpg';
import negTwo from '../../asset/image/artwork/negative-space-2.jpg';

class Artwork extends Component {

    constructor() {
        super();
        this.state = {
            artworkData: [],
            loading: true,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ArtworkAll).then(result => {
            this.setState({
                artworkData: result,
                loading: false,
            });
        }).catch(error => {
            this.setState({
                artworkData: '',
            })
        });
    }

  render() {

    if (this.state.loading == true) {
        <Loading /> 
    } else {

        const artworkDataList = this.state.artworkData;
        const artworkPhotoArray = [];

        artworkDataList.map(artworkDataList => {
            const artworkObject = {'src': artworkDataList.artwork_path, 'width': artworkDataList.width, 'height': artworkDataList.height};
            artworkPhotoArray.push( artworkObject );
        });

        return (
        <Fragment>
            <Container>
                <div className='text-center'>
                    <Bounce>
                        <h1 className="serviceMainTitle">Artwork</h1>
                    </Bounce>
                    <div className="bottom"></div>
                </div>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <PhotoAlbum layout="columns" photos={artworkPhotoArray} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    } // end else
  }
}

export default Artwork