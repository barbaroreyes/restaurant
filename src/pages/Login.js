import React, { useState  } from 'react';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import {toast} from "react-toastify"

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    console.log(userInfo);
  };

  const userLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
     
      console.log("user loged");
      window.location.href="/"
      toast.success("User Logged in Succesfully",{position: "top"})
     
     
      console.log('Well Done');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row mt-5">
        
      <div className="col"></div>
      <div className="col">
        Login Page
        <form className="form-group" onSubmit={userLogin}>
       
          <input
            type="email"
            name="email"
            className="form-control mt-4"
            placeholder="Type Your Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mt-4"
            placeholder="Type Your Password"
            onChange={handleChange}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block mt-4"
            value="User Register"
          />
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
