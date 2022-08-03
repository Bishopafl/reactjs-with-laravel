import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Pie, PieChart, Cell, Sector, ResponsiveContainer } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00C49F', '#FFBB28', '#0088FE', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class Analysis extends Component {


    constructor() {
        super();
        this.state={
            data: [
                { Technology: 'PHP', XP: 400 },
                { name: 'Javascript', XP: 400 },
                { name: 'MySql', XP: 400 },
                { name: 'Laravel', XP: 400 },
                { name: 'React', XP: 300 },
                { name: 'Angular', XP: 400 },
                { name: 'CI/CD pipelines', XP: 300 },
                { name: 'Unit Testing', XP: 400 }
              ]
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
                    <ResponsiveContainer>

                        <PieChart width={400} height={400}>
                            <Pie
                                data={this.state.data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="XP"
                            >
                                {this.state.data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>


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