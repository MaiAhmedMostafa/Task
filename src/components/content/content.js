import React, { Component } from 'react';
import './Content.css';
import Title from '../title/title';
import Exams from '../exams/exams';
import Announcments from '../announcment/announcments';
import { Col, Row } from 'react-bootstrap';
import Quizes from '../quizes/quizes';

class Content extends Component {
    render() {
        return (
            <div >
                <Title></Title>
                <Exams></Exams>
                <Row>
                    <Col xs={8} md={8}>
                        <Announcments></Announcments>
                    </Col>

                    <Col xs={4} md={4}>
                        <Quizes></Quizes>
                    </Col>

                </Row>

            </div>
        )
    }
}

export default Content;
