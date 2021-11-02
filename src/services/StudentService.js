import axios from 'axios';
import authHeader from "./auth-header";
const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL, { headers: authHeader() });
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student, { headers: authHeader() });
    }

    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId, { headers: authHeader() });
    }

    updateStudent(student, studentId){
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student, { headers: authHeader() });
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId, { headers: authHeader() });
    }
}

export default new StudentService()