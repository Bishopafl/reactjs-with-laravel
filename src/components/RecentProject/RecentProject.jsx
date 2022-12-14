import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Nav, Row, Stack } from 'react-bootstrap';
import githubCatImage from '../../asset/image/github.gif';
import atlantaChiroImage from '../../asset/image/atl-chiro.gif';
import linkedInImage from '../../asset/image/linkedin.gif';
import { Link, NavLink } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Bounce';

class RecentProject extends Component {
  
    constructor() {
      super();
      this.state={
        projectData: [],
        loading: true,
      }
    }
    
    componentDidMount() {
      RestClient.GetRequest(AppUrl.ProjectHome).then(result => {
            this.setState({
            projectData: result,
            loading: false,
          });
        }).catch(error => { 
          this.setState({
            projectData: '',
          });
      });
    }


  render() {

    if (this.state.loading == true) {
       return <Loading />
    } else {

      const projectDataList = this.state.projectData;

      const projectDetailsView = projectDataList.map(projectDataList => {
          return  <Col lg={4} md={6} sm={12}><Zoom>
          <Card className='projectCard my-4'>
              
              <Card.Img className='projectCardImg' src={ projectDataList.card_img } />

              <Card.Body className='projectCardBody'>
                  <Stack direction="vertical" gap={1}>
                      <Card.Title className='serviceName'>{ projectDataList.project_name }</Card.Title>
                      <Card.Text className='serviceDescription'>{ projectDataList.project_description }</Card.Text>
                      <Row>
                          <Col lg={6} md={6} sm={6} xs={6}>
                              <Button href={projectDataList.live_preview} className='link-style' variant="outline-primary">Visit Site</Button>    
                          </Col>

                          <Col lg={6} md={6} sm={6} xs={6}>
                              <Button href={ '/projectdetails/' + projectDataList.id+"/"+projectDataList.project_name} variant="primary">View More</Button>
                          </Col>
                      </Row>
                  </Stack>
              </Card.Body>
          </Card>
        </Zoom>
      </Col>
      })

      return (
        <Fragment>
          <Container className='text-center recentProjectContainer'>
            <Bounce>
              <h1 className='serviceMainTitle'>Recent Projects</h1>
            </Bounce>
            <div className='bottom'></div>
            <Row>
                {projectDetailsView}
            </Row>
          </Container>
        </Fragment>
      )
    } // end else
  }
}

export default RecentProject