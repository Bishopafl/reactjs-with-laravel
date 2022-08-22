import React, { Component, Fragment } from 'react';
import Artwork from '../components/Artwork/Artwork';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ArtworkPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title='Artwork' />
        <PageTop pageTitle="Creative Designs" />
        <Artwork />
        <Footer />
      </Fragment>
    )
  }
}

export default ArtworkPage