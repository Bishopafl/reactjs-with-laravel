import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

class AllServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='Our Services' />
        <PageTop pageTitle="Our Services" />
        <Services />
        <Footer />
      </Fragment>
    )
  }
}

export default AllServicesPage