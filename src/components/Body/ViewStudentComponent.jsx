import React, { Component } from 'react'
import StudentService from '../../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }



    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student Name: </label>
                            <div> { this.state.student.name }</div>
                        </div>
                        <div className = "row">
                            <label> Student Registration Number: </label>
                            <div> { this.state.student.regdNo }</div>
                        </div>
                        <div className = "row">
                            <label> Student Email ID: </label>
                            <div> { this.state.student.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Student Address Name: </label>
                            <div> { this.state.student.address }</div>
                        </div>
                        <div className = "row">
                            <label> Student PicUp Address Name: </label>
                            <div> { this.state.student.pickUpAddress }</div>
                        </div>
                        <div className = "row">
                            <label> Student Mobile Number: </label>
                            <div> { this.state.student.mobileNo }</div>
                        </div>
                        <div className = "row">
                            <label> Student Parance Mobile Number: </label>
                            <div> { this.state.student.parance_mobileNo }</div>
                        </div>
                       
                        
                    </div>
                    <div className = "row right">
                    <a className="btn btn-primary" href="/students"> <img src="https://img.icons8.com/metro/19/ffffff/back.png"/>Back</a>
                 </div>

                    

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent
