import React, { Component } from 'react';
import './exams.css';
import { Col, Row, Button } from 'react-bootstrap';
import exams from '../../assets/exams.PNG'
class Exams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'EXAMS TIME',
            intro: 'Here we are, Are you ready to fight?Don\'t worry, we prepared some tips to be ready for your exams.',
            quote: '"Nothing happens until something moves" ~ Albert Einstein',
        };
    }

    render() {
        return (
            <div className="examsContainer">
                <Row>
                    <Col xs={6} md={6}>
                        <div className="examsTitle">{this.state.title}</div>
                        <div className="intro">{this.state.intro}</div>
                        <div className="quote">{this.state.quote}</div>
                        <Button className="examsBtn" bsStyle="info">View exams tips</Button>
                    </Col>

                    <Col xs={6} md={6}>
                        <img src={exams} alt={"exams"} className="examsImg"/>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Exams;
