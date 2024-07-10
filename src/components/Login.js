import React from 'react';

const Login = () => {
  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className='form-group'>
            <input 
            type = "email"
             className="form-control"
             placeholder="Type Your Email"
             />
            <input 
             type = "password"
             className="form-control mt-4"
             placeholder="Type Your Password"
             />
              <input 
             type = "submit"
             className="btn btn-dark btn-block mt-4"
             placeholder="Type Your Password"
             value="User Register"
             />
        </form>

      </div>
      <div className="col">

      </div>
    </div>
  );
}

export default Login;