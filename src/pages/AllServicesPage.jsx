import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import ContactUs from '../components/ContactUs/ContactUs';

class AllServicesPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  
  render() {
    return (
      <Fragment>
        <TopNavigation title='Our Services' />
        <PageTop pageTitle="Our Services" />
        <Services />
        <ContactUs />
        <Footer />
      </Fragment>
    )
  }
}

export default AllServicesPage