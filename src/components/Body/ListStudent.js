import React, { Component } from "react";
import StudentService from '../../services/StudentService'
import { BrowserRouter as Link } from "react-router-dom";

import {  IoMan, IoBus } from "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import { Col, Row, Container } from "reactstrap";

class ListStudent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view_student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add_student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add_student/_add');
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
        {/* <Container className="mt-4">
          <Row>
            <Col sm="3">
              <Button block color="success" onClick={this.addStudent}>
                <span>Add Student</span>
              </Button>
            </Col>
          </Row>
        </Container> */}
        <Container className="mt-5">
          {/* {this.state.students.map((student) => this.renderStudent(student))} */}
        </Container>
        {
                                    this.state.students.map(
                                        student => 
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  <span>{student.name}</span>
                </CardTitle>
                <CardBody>
                  <Row  key = {student.id}>
                    <Col sm="4" className="text-center">
                      <span className="font-weight-bold"> Student PicUp Address : </span>
                      <span>{student.pickUpAddress}</span>
                    </Col>

                   

                    <Col sm="4" className="text-center">
                      <span className="font-weiht-bolder">Student Mobile No :</span>
                      <span>{student.mobileNo}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">Student Registration No :</span>
                      <span>{student.regdNo}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">Student Email ID :</span>
                      <span>{student.emailId}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">Student Address :</span>
                      <span>{student.address}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">
                      Student Parance Mobile No :
                      </span>
                      <span>{student.parance_mobileNo}</span>
                    </Col>

                    
                  </Row>
                </CardBody>
                {/* <CardFooter>
                  <Row>
                    <Col sm-6>
                      <Button onClick={ () => this.editStudent(student.id)} block outline color="primary">
                        Edit
                      </Button>
                    </Col>

                    <Col sm-6>
                      <Button onClick={ () =>this.deleteStudent(student.id)} block outline color="denger">
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

export default ListStudent;
