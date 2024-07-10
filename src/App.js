import './App.css';
import {Routes , Route} from "react-router-dom"
import Inicio from './components/Inicio';
import Admin from './components/Admin';
import Login from './components/Login';
function App() {
  return (
    <div className="container">
     <Routes>
      <Route  path="/" element={<Inicio/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/login" element= {<Login/>}/>


     </Routes>

 
  
    </div>
  );
}

export default App;
