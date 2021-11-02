import React, { Component } from "react";
import StudentService from "../../services/StudentService";

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      name: "",
      address: "",
      emailId: "",
    };
    this.changenameHandler = this.changenameHandler.bind(this);
    this.changeaddressHandler = this.changeaddressHandler.bind(this);
    this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      StudentService.getStudentById(this.state.id).then((res) => {
        let student = res.data;
        this.setState({
          name: student.name,
          address: student.address,
          emailId: student.emailId,
        });
      });
    }
  }
  saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let student = {
      name: this.state.name,
      address: this.state.address,
      emailId: this.state.emailId,
    };
    console.log("student => " + JSON.stringify(student));

    // step 5
    if (this.state.id === "_add") {
      StudentService.createStudent(student).then((res) => {
        this.props.history.push("/students");
      });
    } else {
      StudentService.updateStudent(student, this.state.id).then((res) => {
        this.props.history.push("/students");
      });
    }
  };

  changenameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeaddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  cancel() {
    this.props.history.push("/students");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Student</h3>;
    } else {
      return <h3 className="text-center">Update Student</h3>;
    }
  }

  render() {
    return (
      <div>
        <section class="">
          <div class="">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-lg-12 col-xl-11">
                <div class=" text-black">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          {this.getTitle()}
                        </p>

                        <form class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                value={this.state.name} onChange={this.changenameHandler}
                              />
                              
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                value={this.state.emailId} onChange={this.changeEmailHandler}
                              />
                             
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">
                                Your Address
                              </label>
                              <input
                                type="text"
                                id="form3Example3c"
                                class="form-control"
                                value={this.state.address} onChange={this.changeaddressHandler}
                              />
                              
                            </div>
                          </div>



                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button className="btn btn-primary btn-lg" onClick={this.saveOrUpdateStudent}>Save</button>
                             <button className="btn btn-danger btn-lg" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
