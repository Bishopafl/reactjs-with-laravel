import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const radarData = [
    {
      subject: 'PHP',
      A: 110,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Javascript',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'MySQL',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Laravel',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'React',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Angular',
      A: 98,
      B: 85,
      fullMark: 150,
    },
  ];
class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data: radarData
        }
    }

    render() {
        return (
            <Fragment>
            <Container>
                <div className='text-center'>
                <h1 className='serviceMainTitle'>Technology Used</h1>
                </div>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer width={400} height={300}>

                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.state.data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar name="Lopez Marketing" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>

                        </ResponsiveContainer>


                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <p className='text-justify serviceDescription'>First I would like to thank you for visiting my site today. I have been doing web design and development since October 2015.
                        <br /><br />
                        After graduating from Ironhack, a coding bootcamp in Miami, Florida, I took the skills gain learning full stack development.
                        <br /><br />
                        It was an exciting and challenging experience for me, especially due to my decision to make a complete career change.
                        <br /><br />
                        Looking back on these last years, I am grateful to the teachers and students that have taught me lessons on how to be a better developer and a better person.
                        </ p>
                    </Col>
                </Row>
            </Container>
            </Fragment>
        )
    }
}

export default Analysis