import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Preferences from './Preferences'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const notify = () => toast("Loginid and password is invaild!");
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "nithya",
      password: "123"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      
    
    }
  
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const renderErrorPass = (pass) =>
    pass === errorMessages.pass && (
      <div className="error">{errorMessages.message}</div>
    );
    


  // JSX code for login form
  const renderForm = (
    <div className="form d-flex justify-content-center p-3">
      <form onSubmit={handleSubmit} >

        <div className="input-container">
          <label className="">Login </label>
          <br></br>
          <input className="inputfield" type="text" name="uname" placeholder="Enter login" />
          {renderErrorMessage("uname")}
        </div>
        <br></br>

        <div className="input-container">
          <label>Password </label>
          <br></br>
          <input className="inputfield" type="password" name="pass" placeholder="Enter password"  />
          {renderErrorPass("pass")}
        </div>
        <br></br>
        <div className="button-container">
          <button type="submit"  className="btn loginButton" onClick={notify}>Log in</button>
          <ToastContainer className="text-center" />
        </div>
      </form>
    </div>
  );

  return (
  
    <div className="app">
      <Navbar></Navbar>
      <div className="login-form">
     




        
        {isSubmitted ? <Preferences></Preferences>
        
        : renderForm}
      </div>
    </div>
  );
}
export default Login





