import React, { Component } from 'react';
import './title.css';
import student from '../../assets/student.png';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Talia',
            searchText: ''
        };
        this.search = this.search.bind(this);
    }

    search(event) {
        this.setState({
            searchText: event.target.value
        })
    }

    render() {
        return (
            <div className="titleContainer">
                <span className="title">Welcome {this.state.userName},</span>
                <div className="searchContainer">
                    <div className="searchbar">
                        <i className="fas fa-search searchIcon"></i>
                        <input placeholder='Search ...' onChange={(event) => this.search(event)} />
                    </div>
                    <i className="fas fa-bell msgIcon"></i>
                    <i className="fas fa-envelope msgIcon"></i>
                        <img className="profilePic" src={student} alt={"Profile"} />
                </div>

            </div>
        )
    }
}

export default Title;
