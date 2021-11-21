import React, { Component } from 'react'
import Service from '../../services/BusDetailsService';
import { MdArrowBackIosNew } from 'react-icons/md';

export default class ListRoute extends Component {
    
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
        return (
            <>
       
       
                <div class="bg-warning d-flex justify-content-center">

                    <div class="">Centurion University of Technology and Management
                    </div>
                    

                </div>
                <a href="/Home" className="ms-5"><MdArrowBackIosNew />
          </a>
                <div className=" container shadow-lg mt-5 table-data bg-light" >

                    <h2 className="text-center"> ROUTES</h2>
                    <button type="button" style={{ marginLeft: "90px" }} className="btn btn-primary mb-3" onClick={this.addRoute}>ADD ROUTE</button>
                    <div className="row">


                        <table className="table table-striped border-dark  table-bordered table-hover">

                            <thead className="thead-dark">
                                <tr>
                                    <th>Route_No</th>
                                    <th>Bus_NO</th>
                                    <th>origin</th>
                                    <th> Destination</th>


                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.route_det.map(
                                        route =>
                                            <tr key={route.id}>

                                                <td>{route.routeno}</td>
                                                <td>{route.busno}</td>
                                                <td>{route.origin}</td>
                                                <td>{route.destination}</td>

                                                <td><button onClick={() => this.editRoute(route.id)} className="btn btn-primary">Update </button>
                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.deleteRoute(route.id)} className="btn btn-danger">Delete</button>
                                                    {/* <button style={{marginLeft: "15px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                                </td>

                                            </tr>
                                    )
                                }</tbody>

                        </table>
                    </div>



                </div>
            </>

        )
    }
}