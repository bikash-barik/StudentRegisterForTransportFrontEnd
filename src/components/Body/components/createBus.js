import React, { Component } from "react";
import AdminNavigationBar from "./adminNavigationBar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class CreateBus extends Component {
  state = {
    busid: "",
    busName: "",
    startStation: "",
    endStation: "",
    isbusCreated: false
  };

  handlebusid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ busid: value.toUpperCase() });
    }
  };


  handlebusName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ busName: value.toUpperCase() });
    }
  };

  handlestartStation = event => {
    const { value } = event.target;
    this.setState({ startStation: value.toUpperCase() });
  };

  handleendStation = event => {
    const { value } = event.target;
    this.setState({ endStation: value.toUpperCase() });
  };



  handleSubmit = event => {
    event.preventDefault();

    const newbus = {
      busid: this.state.busid,
      busName: this.state.busName,
      startStation: this.state.startStation,
      endStation: this.state.endStation,
    
    };

    axios
      .post(
        "#",
        newbus
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("bus created successfully");
    this.setState({
        busid: "",
        busName: "",
        startStation: "",
        endStation: "",
    
      isbusCreated: true
    });
  };
  render() {
    if (this.state.isbusCreated) {
      return <Redirect to="/buslist" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>
        <AdminNavigationBar />
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Create BUS</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="busNumber">Bus No</label>
                      <input
                        type="name"
                        className="form-control"
                        id="busid"
                        onChange={this.handlebusid}
                        value={this.state.busid}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="busName">Bus Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="busName"
                        onChange={this.handlebusName}
                        value={this.state.busName}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Source</label>
                      <input
                        id="from"
                        className="form-control"
                        onChange={this.handlestartStation}
                        value={this.state.startStation}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">Destination</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handleendStation}
                        value={this.state.endStation}
                        required
                      />
                    </div>
                  </div>
                  <br />
                
              
                  <br />
                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Create Bus
                    </button>
                    
                    <p>Delete Bus?<Link to="/delBus"> Click Here</Link></p>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}