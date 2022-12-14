import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            chartData: [],
            techDesc: "...",
            loading: true,
        }
    }

    componentDidMount() {
      RestClient.GetRequest(AppUrl.ChartDataAll).then(result => {
        this.setState({
          chartData: result,
          loading: false,
        })
      }).catch(error => {
        this.setState({
          chartData: []
        })
      });

      RestClient.GetRequest(AppUrl.HomeTechDescription).then(result => {
        this.setState({
          techDesc: result[0]['tech_description'] 
        });
      })
    }

    render() {

      if (this.state.loading == true) {
        return <Loading />
      } else {

        const chartDataAll = this.state.chartData;
        const chartDataArray = [];

        chartDataAll.map(chartDataAll => {
          const chartDataObject = {
            'subject': chartDataAll.subject_title,
            'A' : chartDataAll.subject_knowledge,
            'fullMark' : chartDataAll.subject_total_knowledge,
          }
          chartDataArray.push({...chartDataObject});
        });

        return (
          <Fragment>
            <Container className='my-5'>
                <div className='text-center'>
                  <Bounce>
                    <h1 className='serviceMainTitle'>Technology Used</h1>    
                  </Bounce>
                </div>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                          
                            <RadarChart outerRadius="80%" data={chartDataArray}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar name="Lopez Marketing" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                          
                        </ResponsiveContainer>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                      <Fade right>
                        <p className='text-justify serviceDescription'>{ parse(this.state.techDesc) }</ p>
                      </Fade>
                    </Col>
                </Row>
            </Container>
          </Fragment>
        )
      } //end else
    }
}

export default Analysis