import React, { Component } from 'react';
import './announcments.css';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

class Announcments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Announcments",
            description: 'We educate warriors! Keep updates :)',
            Announcments: []

        };
    }
    componentDidMount() {
        axios.get('http://localhost:3000/fakeAnnouncmentService')
            .then((response) => {
                this.setState({ Announcments: response.data })
            })
            .catch((error) => {
                console.log(error);
            });


    }

    render() {
        return (
            <div className="AnnouncContainer">
                <div className="AnnouncTitleContainer">
                    <div className="AnnouncTitle">{this.state.title}</div>
                    <div className="AnnouncDescr">{this.state.description}</div>
                </div>
                <div className="AllAnnouncContainer">
                    {this.state.Announcments.map((announc) => {
                        return (
                            <Row >
                                <Col xs={3} md={3}>
                                        <div className="AnnouncName">{announc.name}</div>
                                        <div className="AnnouncSpec">{announc.speciality}</div>
                                </Col>
                                <Col xs={9} md={9}>
                                    <div className="Descrip">{announc.Description}</div>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Announcments;
