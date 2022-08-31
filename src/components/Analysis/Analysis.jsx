import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            chartData: [],
            techDesc: "..."
        }
    }

    componentDidMount() {
      RestClient.GetRequest(AppUrl.ChartDataAll).then(result => {
        this.setState({
          chartData: result
        })
      }).catch(error => {
        this.setState({
          chartData: []
        })
      });

      RestClient.GetRequest(AppUrl.HomeTechDescription).then(result => {
        this.setState({techDesc: result[0]['tech_description']});
      })
    }

    render() {

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
          <Container>
              <div className='text-center'>
              <h1 className='serviceMainTitle'>Technology Used</h1>
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
                      <p className='text-justify serviceDescription'>{ parse(this.state.techDesc) }</ p>
                  </Col>
              </Row>
          </Container>
        </Fragment>
      )
    }
}

export default Analysis