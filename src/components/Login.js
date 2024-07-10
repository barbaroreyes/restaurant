import{useState}from 'react';
import auth from "../firebaseConfig"

const Login = () => {
    const [userInfo , setUserInfo]  = useState({email: '', password:""});

  const handleChange = (event) => {
    setUserInfo({...userInfo,[event.target.name]:event.target.value});
  }
 
  const userRegistrer = (e) =>{
    e.preventDefault();
      alert("User Registered")
    try {
        auth.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
          
            .catch(function (error) {
              console.log(error)
            });
        
    } catch (error) {
        
    }

  }

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className='form-group' onSubmit={userRegistrer}>
            <input 
            type = "email"
            name = {userInfo.name}
             className="form-control"
             placeholder="Type Your Email"
             onChange={handleChange }
             />
            <input 
             type = "password"
             name = {userInfo.name}
             className="form-control mt-4"
             placeholder="Type Your Password"
             onChange={handleChange }
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