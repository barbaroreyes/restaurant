import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    console.log(userInfo);
  };

  const userRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      const user = auth.currentUser;
      console.log(user);
      console.log('Well Done');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className="form-group" onSubmit={userRegister}>
          <input
            type="email"
            name="email"
            className="form-control"
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
