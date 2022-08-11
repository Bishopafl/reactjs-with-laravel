import React, { Component, Fragment } from 'react'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pageTitle="Contact Us" />
        <ContactUs />
        <Footer />
      </Fragment>
    )
  }
}

export default ContactPage