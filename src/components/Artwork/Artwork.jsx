import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoAlbum from 'react-photo-album';

const photos = [
    {
        src: 'http://via.placeholder.com/640x360',
        width: 780,
        height: 600
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 500,
        height: 600
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 900,
        height: 500
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 1080,
        height: 700
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 500,
        height: 600
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 500,
        height: 600
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 500,
        height: 600
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 1080,
        height: 900
    },
    {
        src: 'http://via.placeholder.com/640x360',
        width: 300,
        height: 300
    }

]

class Artwork extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <div className='text-center'>
                <h1 className="serviceMainTitle">Artwork</h1>
                <div className="bottom"></div>
            </div>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <PhotoAlbum layout="columns" photos={photos} />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Artwork