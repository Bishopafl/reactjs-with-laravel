import React, { Component, Fragment } from 'react';
import Artwork from '../components/Artwork/Artwork';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ArtworkPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pageTitle="Creative Designs" />
        <Artwork />
        <Footer />
      </Fragment>
    )
  }
}

export default ArtworkPage