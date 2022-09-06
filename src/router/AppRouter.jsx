import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AllServicesPage from '../pages/AllServicesPage';
import AllCoursePage from '../pages/AllCoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ArtworkPage from '../pages/ArtworkPage';
import ContactPage from '../pages/ContactPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import PageNotFound from '../pages/PageNotFound';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route exact path="/service" component={ AllServicesPage } />
              <Route exact path="/course" component={ AllCoursePage } />
              <Route exact path="/portfolio" component={ PortfolioPage } />
              <Route exact path="/about" component={ AboutPage } />
              <Route exact path="/artwork" component={ ArtworkPage } />
              <Route exact path="/contact" component={ ContactPage } />
              
              <Route exact path="/refund" component={ RefundPage } />
              <Route exact path="/terms-and-conditions" component={ TermsPage } />
              <Route exact path="/privacy" component={ PrivacyPage } />
              
              <Route exact path="/projectdetails/:projectID/:projectName" component={ ProjectDetailsPage } />
              <Route exact path="/coursedetails/:courseID/:courseName" component={ CourseDetailsPage } />
              
              
              {/* Cool ReactJS one-liner for routing to external links */}
              <Route path='/adams-github' component={() => { 
                  window.location.href = 'https://github.com/Bishopafl';
                  return null;
              }}/>

              <Route component={PageNotFound} />
          </Switch>
      </Fragment>
    )
  }
}


export default AppRouter