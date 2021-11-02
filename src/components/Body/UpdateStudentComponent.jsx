import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            address: '',
            emailId: ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({name: student.name,
                address: student.address,
                emailId : student.emailId
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, address: this.state.address, emailId: this.state.emailId};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/students');
        });
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Student</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Full Name" name="firstName" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Full Address" name="lastName" className="form-control" 
                                                value={this.state.address} onChange={this.changeaddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Univercity Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateStudentComponent
