import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';


const DashboardPage = ({ component: roles }) => {
    const { user: currentUser } = useSelector((state) => state.auth);
  
    if (!currentUser) {
      return <Redirect to="/login" />;
     
    }
  
    if(currentUser.roles  == "ROLE_USER"){
      return <Redirect to="/ListStudent" />;
    }else{
      return <Redirect to="/ListStudentComponent" />;
    }
}

export default DashboardPage;