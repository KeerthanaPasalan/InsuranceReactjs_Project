import React, { Component } from "react";
import mainlogo from "./lahitapiola.png";
import "./Coverage.css";
import { Navbar, Container, Row, Col, Card } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import ParentPage from "./ParentPage";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";

// const browserHistory = createBrowserHistory();
// const history = createHistory();

class Coverage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: "",
    };
  }
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Brand>
            <BrowserRouter>
              <Switch>
                <Route path="/ParentPage" exact component={ParentPage} />
                <Link to="./ParentPage" className="btn btn-primary">
                  Back
                </Link>
              </Switch>
            </BrowserRouter>
            <img
              src={mainlogo}
              class="brand"
              width="150"
              height="40"
              alt="logo"
            />
          </Navbar.Brand>
        </Navbar>
        <Container fluid className="container-wrapper">
          <Row xs={2} md={4} lg={6} className="container-row">
            <Col className="container-col">English</Col>
            <Col className="container-col">Finnish</Col>
          </Row>
          <Row className="container-header">
            <h2>
              <Col md={{ span: 6, offset: 1 }}>
                Our suggestion for a suitable insurance for you - LähiTapiola
                Henkiturva
              </Col>
            </h2>
          </Row>
          <Row className="container-header">
            <Col md={{ span: 6, offset: 1 }}>
              The amount of compensation and the price are based on the
              information you provide
            </Col>
          </Row>

          <Card style={{ width: "650px" }} className="default-card">
            <Card.Header className="card-header">
              <Row md={2}>
                <Col className="col-header"> Your Information</Col>
                <Col className="col-edit-icon">
                  <i>
                    <FaRegEdit />
                  </i>
                  Edit
                </Col>
              </Row>
            </Card.Header>

            <Row md={2}>
              <Col className="col-card">Year of birth</Col>
              <Col className="col-cardresp">12</Col>
            </Row>
            <Row md={2}>
              <Col className="col-card">Monthly income before taxes</Col>
              <Col className="col-cardresp">hi</Col>
            </Row>
            <Row md={2}>
              <Col className="col-card">
                Total liabilities, loans and credits
              </Col>
              <Col className="col-cardresp">hi</Col>
            </Row>
            <Row md={2}>
              <Col className="col-card">Number of children in care</Col>
              <Col className="col-cardresp">hi</Col>
            </Row>
            <Row md={2}>
              <Col className="col-card">Smoking Habit?</Col>
              <Col className="col-cardresp">hi</Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Coverage;
