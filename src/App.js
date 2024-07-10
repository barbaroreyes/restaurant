import './App.css';
import {Routes , Route} from "react-router-dom"
import Inicio from './components/Inicio';
import Admin from './components/Admin';
import Login from './components/Login';
import Menu from './components/Menu';
function App() {
  return (
    <div className="container">
      <Menu/>
     <Routes>
      <Route  path="/" element={<Inicio/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/login" element= {<Login/>}/>


     </Routes>

 
  
    </div>
  );
}

export default App;
