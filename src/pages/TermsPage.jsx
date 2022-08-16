import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TermsDescription from '../components/TermsDescription/TermsDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class TermsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms and Conditions" />
        <PageTop pageTitle="Terms and Conditions" />
        <TermsDescription />
        <Footer />
      </Fragment>
    )
  }
}

export default TermsPage