import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import githubCatImage from '../../asset/image/github.gif';
import atlantaChiroImage from '../../asset/image/atl-chiro.gif';
import linkedInImage from '../../asset/image/linkedin.gif';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class AllProjects extends Component {

    constructor() {
        super();
        this.state = {
            allProjectData: [],
            loading: true,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectAll).then(result => {
            this.setState({
                allProjectData: result,
                loading: false,
            })
        })
    }

  render() {
    if (this.state.loading == true) {
        return <Loading />
    } else {

        const allProjectList = this.state.allProjectData;
        const allProjectView = allProjectList.map(allProjectList => {
            return <Col lg={4} md={6} sm={12}>
            <Card className='projectCard'>
                <Card.Img src={allProjectList.card_img} />
                <Card.Body>
                    <Card.Title className='serviceName'>{ allProjectList.project_name }</Card.Title>
                    <Card.Text className='serviceDescription'>{ allProjectList.project_description }</Card.Text>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="d-grid gap-2">
                                <Button 
                                    href={allProjectList.live_preview } 
                                    className='link-style' 
                                    variant="primary"
                                    size="lg"
                                >Visit Site</Button>    
                            </div>
                            
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        })

        return (
            <Fragment>
            <Container>
                <div className='text-center'>
                    <h1 className='seviceMainTitle'>Recent Projects</h1>
                    <div className='bottom'></div>
                </div>
                
                <Row>
                    {allProjectView}
                </Row>
                
            </Container>
        </Fragment>
        )
    } // end else
  }
}

export default AllProjects