import React, { Component } from "react";
import StudentService from '../../services/StudentService'
import { BrowserRouter as Link } from "react-router-dom";

import { IoMan, IoBus } from "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import { Col, Row, Container } from "reactstrap";

class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: {},
    };
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }

  render() {
    // renderStudent(students) {
    return (
      <Container>
        
        <Container className="mt-4">
          <Row>
            <Col sm="3">
              <Button block color="success" onClick={this.addStudent}>
              <a className="btn btn-primary" href="/students"> <img src="https://img.icons8.com/metro/19/ffffff/back.png"/>Back</a>
              </Button>
            </Col>
          </Row>
        </Container>

        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle tag="h5">
                <IoMan className="font-size-xl" />
                <span>{this.state.student.name}</span>
              </CardTitle>
              <CardBody>
                <Row>
                  <Col sm="4" className="text-center">
                    <span className="font-weight-bold">
                      {" "}
                      Student Registration Number:
                    </span>
                    <span>{ this.state.student.regdNo }</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weiht-bolder">
                    Student Email ID:
                    </span>
                    <span>{ this.state.student.emailId }</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">
                    Student Address Name:
                    </span>
                    <span>{ this.state.student.address }</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">Student PicUp Address Name:</span>
                    <span>{ this.state.student.pickUpAddress }</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">Student Mobile Number:</span>
                    <span>{ this.state.student.mobileNo }</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">
                    Student Parance Mobile Number: 
                    </span>
                    <span>{ this.state.student.parance_mobileNo }</span>
                  </Col>
                </Row>
              </CardBody>
              
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ViewStudentComponent;
