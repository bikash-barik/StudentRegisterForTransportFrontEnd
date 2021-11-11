import React, { Component } from "react";
import Service from "../../services/BusDetailsService";
// import {  } from "react-bootstrap";

export default class BusUpdate extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          id: this.props.match.params.id,
          routeno: '',
          busno: '',
          origin: '',
          destination: '',
         
        }
        this.changeRouteNoHandler = this.changeRouteNoHandler.bind(this);
        this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
        this.changeOriginHandler = this.changeOriginHandler.bind(this);
        this.changeDestinationHandler = this.changeDestinationHandler.bind(this);
        this.updateRoute = this.updateRoute.bind(this);
      }
    
      componentDidMount() {
        Service.getRouteById(this.state.id).then((res) => {
          let route = res.data;
          this.setState({
            routeno: route.routeno,
            busno: route.busno,
            origin: route.origin,
            destination: route.destination
          });
        });
      }
      updateRoute = (e) => {
        e.preventDefault();
    
        let route = { routeno: this.state.routeno, busno: this.state.busno, origin: this.state.origin, destination: this.state.destination }
        console.log('route =>' + JSON.stringify(route));
        console.log('id =>' + JSON.stringify(this.state.id));
        Service.updateRoute(route, this.state.id).then(res => {
          this.props.history.push('/busdetails');
        });
      }
      changeRouteNoHandler(event) {
        this.setState({ routeno: event.target.value })
      }
    
      changeBusNoHandler(event) {
        this.setState({ busno: event.target.value })
      }
    
      changeOriginHandler(event) {
        this.setState({ origin: event.target.value })
      }
      changeDestinationHandler(event) {
        this.setState({ destination: event.target.value })
      }
     
      cancel() {
        this.props.history.push("/busdetails");
      }
  render() {
    return (
      <>
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
                           Update Bus Details
                          </p>

                          <form class="mx-1 mx-md-4">
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <label for="floatingInput">
                                  Enter Route number
                                </label>

                                <input
                                  type="text"
                                  class="form-control is-valid"
                                  value={this.state.routeno}
                                  onChange={this.changeRouteNoHandler}
                                  required="required"
                                />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <label for="floatingInput">
                                  Enter Bus number{" "}
                                </label>
                                <input
                                  class="form-control"
                                  id="floatingInput"
                                  value={this.state.busno}
                                  onChange={this.changeBusNoHandler}
                                />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <label for="floatingInput">Enter Origin </label>
                                <input
                                  class="form-control"
                                  id="floatingInput"
                                  value={this.state.origin}
                                  onChange={this.changeOriginHandler}
                                />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <label for="floatingInput">
                                  Enter Deatination{" "}
                                </label>
                                <input
                                  class="form-control"
                                  id="floatingInput"
                                  value={this.state.destination}
                                  onChange={this.changeDestinationHandler}
                                />
                              </div>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                className="btn btn-primary btn-lg"
                                onClick={this.updateRoute}
                              >
                                Save
                              </button>
                              <button
                                className="btn btn-danger btn-lg"
                                onClick={this.cancel.bind(this)}
                                style={{ marginLeft: "10px" }}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src="https://image.freepik.com/free-vector/people-standing-flight-registration-counter-family-baggage-ticket-flat-vector-illustration-travelling-vacation_74855-8511.jpg"
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
      </>
    );
  }
}
