import React, { Component } from 'react';
import './quizes.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';


class Quizes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "What's due",
            description: 'Sometimes "later" become "never".Go Now',
            quizes: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/fakeQuizesService')
            .then((response) => {
                this.setState({ quizes: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="AnnouncContainer" style={{ marginLeft: '-15px' }}>
                <div className="AnnouncTitleContainer">
                    <div className="AnnouncTitle">{this.state.title}</div>
                    <div className="AnnouncDescr">{this.state.description}</div>
                </div>
                <div className="AllAnnouncContainer">
                    {this.state.quizes.map((quize) => {
                        return (
                            <div className="quizContainer">
                                <div className="quizeName">{quize.Type === 1 ?<i class="fas fa-hourglass"></i>:<i class="fas fa-calendar-check"></i>}
                                {quize.Name}</div>
                                <div className="AnnouncSpec"> Course: {quize.course}</div>
                                <div className="AnnouncSpec"> Topic:  {quize.Topic}</div>
                                <div className="AnnouncSpec"> Due To: {quize.DueTo}</div>
                                <Button className="quizeBtn">{quize.Type === 1 ? 'Start Quiz' : 'Solve Assignment'}</Button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Quizes;
