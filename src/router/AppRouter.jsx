import React, { Component, Fragment } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Router,
    withRouter,
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
import NotFound from '../components/NotFound/NotFound';
import PageNotFound from '../pages/PageNotFound';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
              <Route exact path="/" component={ withRouter(HomePage) } />
              <Route exact path="/service" component={ withRouter(AllServicesPage) } />
              <Route exact path="/course" component={ withRouter(AllCoursePage) } />
              <Route exact path="/portfolio" component={ withRouter(PortfolioPage) } />
              <Route exact path="/about" component={ withRouter(AboutPage) } />
              <Route exact path="/artwork" component={ withRouter(ArtworkPage) } />
              <Route exact path="/contact" component={ withRouter(ContactPage) } />
              
              <Route exact path="/refund" component={ withRouter(RefundPage) } />
              <Route exact path="/terms-and-conditions" component={ withRouter(TermsPage) } />
              <Route exact path="/privacy" component={ withRouter(PrivacyPage) } />
              
              <Route exact path="/projectdetails/:projectID/:projectName" component={ withRouter(ProjectDetailsPage) } />
              <Route exact path="/coursedetails/:courseID/:courseName" component={ withRouter(CourseDetailsPage) } />
              
              
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