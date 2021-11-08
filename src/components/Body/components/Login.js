import React, { Component, useContext, useState } from "react";
import { Link} from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";




const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("username is required!")
});

const Login = () => { 
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('')
    const history = useHistory();
    const location = useLocation();
    const fromUrl = _get(location, "state.from.pathname");
    const signInSuccess = (userData) => {
        if (fromUrl) {
          history.push(fromUrl);
        } else {
          history.push("/");
        }
      };
      
        const login = (userData) => {
            fetch("http://localhost:8682/auth", {
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              },
              "body": JSON.stringify({
                username: userData.username,
                password: userData.password
              })
            })
            .then(response => response.json())
            .then(response => {
              if(response.error){
               alert('your userId and password is not correct');
              }else {
                const userData = {
                  token:response,
                  name:username
              } 
               signInSuccess(userData)
               console.log(response)
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
    return (
      <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const userData = { ...values };
          resetForm();
          login(userData);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      {() => (
          <Form>
        <div className="outer">
    <div className="inner">
            <h3>Log in</h3>
            <Field
        name="username"
        type="text"
        placeholder="Enter username"
      
      />
      <Field
        name="password"
        type="password"
        placeholder="Password"
        
      />
      <button className="auth-button block" onClick={() => {}}>
        Login
      </button>

      <p>Don't have a account?<Link to="/sign-up"> Register Here</Link></p>
      </div>
      </div>
    </Form>
    )}
    </Formik>
  );
    }

    export default Login;