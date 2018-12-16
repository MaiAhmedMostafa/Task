import React, { Component } from 'react';
import './App.css';
import { Col, Row, Nav, NavItem, Tab } from 'react-bootstrap';
import Content from './components/content/content';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="body">
            <Col xs={2} md={2} className="tabsContainer">
              <div className="title">Coligo</div>
              <Nav bsStyle="pills" className="navContainer" stacked>
                <NavItem className="tab" eventKey="first">
                  <div className="tabcontent"><i className="fas fa-home tabIcon"></i>Dashboard</div>
                </NavItem>
                <NavItem className="tab" eventKey="second">
                  <div className="tabcontent"><i className="far fa-calendar-alt tabIcon"></i>Schedule</div></NavItem>
                <NavItem className="tab" eventKey="third">
                  <div className="tabcontent"><i className="far fa-file-alt tabIcon"></i>Courses</div>
                </NavItem>
                <NavItem className="tab" eventKey="forth">
                  <div className="tabcontent"><i className="fas fa-graduation-cap tabIcon"></i>Gradebook</div>
                </NavItem>
                <NavItem className="tab" eventKey="fifth">
                  <div className="tabcontent"><i className="fas fa-chart-line tabIcon"></i>Perfomance</div>
                </NavItem>
                <NavItem className="tab" eventKey="sixth">
                  <div className="tabcontent"><i className="fas fa-bullhorn tabIcon"></i>Announcement</div>
                </NavItem>
              </Nav>
            </Col>
            <Col xs={10} md={10} className="contentContainer">
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <Content></Content>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Schedule</Tab.Pane>
                <Tab.Pane eventKey="third">Courses</Tab.Pane>
                <Tab.Pane eventKey="forth">Gradebook</Tab.Pane>
                <Tab.Pane eventKey="fifth">Perfomance</Tab.Pane>
                <Tab.Pane eventKey="sixth">Announcement</Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
