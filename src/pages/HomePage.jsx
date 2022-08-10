import React, { Component, Fragment } from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Analysis from '../components/Analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import RecentProject from '../components/RecentProject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';

class HomePage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation />
            <TopBanner />
            <Services />
            <Analysis />
            <Summary />
            <RecentProject />
            <Courses />
            <Video />
            <ClientReview />
            <AboutMe />
            <Footer />
        </Fragment>
    )
  }
}

export default HomePage
