import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import NotFound from '../components/NotFound/NotFound'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class PageNotFound extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="404 page not found" />
        <PageTop pageTitle="404 Page Not Found" />
        <NotFound />
        <Footer />
      </Fragment>
    )
  }
}

export default PageNotFound