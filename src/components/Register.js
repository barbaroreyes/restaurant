import React, { useState  } from 'react';
import {useNavigate,Link} from "react-router-dom"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth ,db} from '../firebaseConfig';
import { setDoc , doc} from "firebase/firestore";
const Login = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({name:'',lastName:"", email: '', password: '' });
  
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
      console.log(user)
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
         newUser:userInfo

        })
        navigate("/");
      }
      
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
            type="text"
            name="name"
            className="form-control mt-4"
            placeholder="Type Your Name"
            onChange={handleChange}
          />
           <input
            type="text"
            name="lastName"
            className="form-control mt-4"
            placeholder="Type Your LastName"
            onChange={handleChange}
          />
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
        <span>do you account already go to  <Link to="/login">Login</Link></span>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
