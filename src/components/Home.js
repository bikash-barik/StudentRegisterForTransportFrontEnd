import { BrowserRouter as Link } from "react-router-dom";
import React, { Component } from "react";
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

const Home = () => {
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
    </Container>
  );
};

export default Home;
