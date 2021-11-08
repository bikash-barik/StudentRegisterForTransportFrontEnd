import React, { Component } from "react";

import axios from "axios";


const Bus = props => (
  <tr>
    <td> {props.Bus.Busid} </td>
    <td> {props.Bus.BusName} </td>
    <td> {props.Bus.startStation} </td>
    <td> {props.Bus.endStation} </td>
    </tr>
  
  
);
class BusList extends Component {
  constructor(props) {
    super(props);
    this.state = { Bustickets: [] };
  }

  //Get the Bus ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:9030/search/findAllBuss")
      .then(response => {
        this.setState({ Bustickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  BusList() {
    return this.state.Bustickets.map(function(currentBus, i) {
      return <Bus Bus={currentBus} key={i} />;
    });
  }



  render() {
    return (
      <div>
        <h3> Buss </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> BusID </th>
              <th> Bus Name </th>
              <th> Source </th>
              <th> Destination </th>
            </tr>
          </thead>
          <tbody>{this.BusList()}</tbody>
        </table>
      </div>
    );
  }
}

export default BusList;
