import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import projectDetailsImage from '../../asset/image/pdetails.png';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import HTMLReactParser from 'html-react-parser';

class ProjectDetails extends Component {

  constructor(props) {
    super();
    this.state ={ 
      SingleProjectId: props.id,
      projectImg: '',
      projectName: '',
      projectDescription: '',
      projectFeatures: '',
      livePreview: '',
    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectDetails+this.state.SingleProjectId).then(result => {
      this.setState({
        projectImg: result[0]['project_img'],
        projectName: result[0]['project_name'],
        projectDescription: result[0]['project_description'],
        projectFeatures: result[0]['project_features'],
        livePreview: result[0]['live_preview'],
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="project-details-thumb-wrap after-shape">
                        <div className='projectImgContainer'>
                          <img width={500} src={this.state.projectImg} alt="" />  
                        </div>
                        
                    </div>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-5">
                    <div className='project-details'>
                        <h1 className='projectDetailsText'>{this.state.projectName}</h1>
                        <p className='projectDetailsSubText'>{ HTMLReactParser(this.state.projectDescription) }</p>


                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> 
                        {HTMLReactParser(this.state.projectFeatures)}
                        </p>

                        <Button variant="info" href={this.state.livePreview} >Live Preview</Button>

                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails