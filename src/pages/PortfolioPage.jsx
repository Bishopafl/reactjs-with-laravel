import React, { Component, Fragment } from 'react';
import AllProjects from '../components/AllProjects/AllProjects';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='Our Portfolio' />
        <PageTop pageTitle='Our Portfolio' />
        <AllProjects />
        <Footer />
      </Fragment>
    )
  }
}

export default PortfolioPage