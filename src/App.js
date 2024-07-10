import './App.css';
import {Routes , Route} from "react-router-dom"
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './components/Menu';
function App() {
  return (
    <div className="container">
      <Menu/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element= {<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
      
      </Routes>

 
  
    </div>
  );
}

export default App;
