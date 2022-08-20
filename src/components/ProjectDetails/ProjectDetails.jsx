import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projectDetailsImage from '../../asset/image/pdetails.png';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="project-details-thumb-wrap after-shape">
                        <img src={projectDetailsImage} alt="" />
                    </div>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-5">
                    <div className='project-details'>
                        <h1 className='projectDetailsText'>Here are projects that I am most proud of.</h1>
                        <p className='projectDetailsSubText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi molestias incidunt rem aliquid reprehenderit corrupti sint ex nisi est voluptatum sapiente accusamus perspiciatis repellendus veniam, blanditiis explicabo, aliquam omnis.</p>

                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Lorem amet consectetur </p>

                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> Nesciunt mollitia quo maiores</p>

                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> quidem nihil sequi totam </p>

                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> voluptatibus corporis modi odit expedita</p>

                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> facere, adipisci, aliquid veniam fugit</p>

                        <p className="cardSubTitle text-start"><FontAwesomeIcon className='iconBullet' icon={faCheckSquare} /> sint eius sed iure!</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails