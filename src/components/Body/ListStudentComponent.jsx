import React, { Component } from 'react'
import StudentService from '../../services/StudentService'
import { Redirect } from 'react-router-dom';


class ListStudentComponent extends Component {
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
        return (
            <div>
                 <h2 className="text-center">Student List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Student Name</th>
                                    <th> Student PicUp Address</th>
                                    <th> Student Mobile No</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> { student.name} </td>   
                                             <td> {student.pickUpAddress}</td>
                                             <td> {student.mobileNo}</td>
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-primary">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-primary">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStudentComponent
