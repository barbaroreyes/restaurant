import './App.css';
import {Routes , Route} from "react-router-dom"
import Register from './components/Register';
import Home from './pages/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="container">
    
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element= {<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
      
      </Routes>

 
  
    </div>
  );
}

export default App;
