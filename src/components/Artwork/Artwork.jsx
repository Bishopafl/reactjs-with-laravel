import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoAlbum from 'react-photo-album';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';

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
                    <h1 className="serviceMainTitle">Artwork</h1>
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