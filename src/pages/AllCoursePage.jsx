import React, { Component, Fragment } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class AllCoursePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='Enrolled Courses' />
        <PageTop pageTitle="All Enrolled Courses" />
        <AllCourses />
        <Footer />
      </Fragment>
    )
  }
}

export default AllCoursePage
