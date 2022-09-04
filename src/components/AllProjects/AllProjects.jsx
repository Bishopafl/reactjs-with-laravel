import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import githubCatImage from '../../asset/image/github.gif';
import atlantaChiroImage from '../../asset/image/atl-chiro.gif';
import linkedInImage from '../../asset/image/linkedin.gif';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import WentWrong from '../../components/WentWrong/WentWrong';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

class AllProjects extends Component {

    constructor() {
        super();
        this.state = {
            allProjectData: [],
            loading: true,
            error: false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectAll).then(result => {
            if (result == null) {
                this.setState({
                    error: true,
                    loading: false,
                });
            } else {
                this.setState({
                    allProjectData: result,
                    loading: false,
                });
            }
        }).catch(error => {
            this.setState({
                error: true,
            })
        })
    }

  render() {
    if (this.state.loading == true) {
        return <Loading />
    } else if(this.state.loading == false) {

        const allProjectList = this.state.allProjectData;
        const allProjectView = allProjectList.map(allProjectList => {
            return <Col lg={4} md={6} sm={12}>
                <Zoom>
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
            </Zoom>
        </Col>
        })

        return (
            <Fragment>
            <Container>
                <div className='text-center mt-5'>
                    <Bounce>
                        <h1 className='seviceMainTitle'>Recent Projects</h1>
                    </Bounce>
                    <div className='bottom'></div>
                </div>
                
                <Row>
                    {allProjectView}
                </Row>
                
            </Container>
        </Fragment>
        )
    } else if(this.state.error ==true) {
        return <WentWrong />
    } 
    // end else
  }
}

export default AllProjects