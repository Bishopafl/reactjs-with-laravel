import React, { Component, Fragment } from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pageTitle='Our Portfolio' />
        <AllProjects />
      </Fragment>
    )
  }
}

export default PortfolioPage