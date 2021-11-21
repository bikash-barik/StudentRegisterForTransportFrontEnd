import React, { Component } from "react";
import Service from '../../services/BusDetailsService';
import { BrowserRouter as Link } from "react-router-dom";

import { IoSchoolOutline, IoMan, IoBus } from "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import { Col, Row, Container } from "reactstrap";

class ListRoutepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            route_det: []
        }
        this.addRoute = this.addRoute.bind(this);
        this.editRoute = this.editRoute.bind(this);
        this.deleteRoute = this.deleteRoute.bind(this);
    }

    deleteRoute(id) {
        Service.deleteRoute(id).then(res => {
            this.setState({ route_det: this.state.route_det.filter(route => route.id !== id) });
        });
    }
    editRoute(id) {
        this.props.history.push(`/update-bus/${id}`);
    }
    componentDidMount() {
        Service.getRoute().then((res) => {
            this.setState({ route_det: res.data });
        });
    }
    addRoute() {
        this.props.history.push("/add-bus");
    }


  render() {
    // renderStudent(students) {
    return (
      <Container>
        <div className="mt-3">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  100 Students
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button block color="success">
                  <Link to="./ShowStudentList.tsx">
                    <span>Manage Student</span>
                  </Link>
                </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  25 Driver
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button> Manage Driver </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoBus className="font-size-xl" />
                  17 Bus
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Manage Bus</Button>
              </Card>
            </Col>
          </Row>
        </div>
        
        <Container className="mt-5">
          {/* {this.state.students.map((student) => this.renderStudent(student))} */}
        </Container>
        {
                                    this.state.route_det.map(
                                        route =>
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  <span> Route_No : {route.routeno}</span>
                </CardTitle>
                <CardBody>
                  <Row  key={route.id}>
                    <Col sm="4" className="text-center">
                      <span className="font-weight-bold"> Bus_NO : </span>
                      <span>{route.busno}</span>
                    </Col>

                   

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">Origin :</span>
                      <span>{route.origin}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">Destination :</span>
                      <span>{route.destination}</span>
                    </Col>

                    
                  </Row>
                </CardBody>
                {/* <CardFooter>
                  <Row>
                    <Col sm-6>
                      <Button onClick={() => this.editRoute(route.id)} block outline color="primary">
                        Edit
                      </Button>
                    </Col>

                    <Col sm-6>
                      <Button onClick={() => this.deleteRoute(route.id)} block outline color="denger">
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default ListRoutepage;
