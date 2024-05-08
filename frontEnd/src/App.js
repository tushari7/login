
import './App.css';
import Home from './Screns/Home';
// import Navbar from './components/Navbar';  // we can not use in the cass of screns 
import {
  
  Routes,
  Route,
} from "react-router-dom";
import Login from './Screns/Login';
import Signup from './Screns/Signup';
import Profile from './Screns/Profile';
import Edit from './Screns/Edit';

function App() { 
  return (
   <div>
    <Routes>
      <Route exact path='/' element = {<Home/>} />
      <Route exact path='/Login' element = {<Login/>} />
      <Route exact path='/Signup' element = {<Signup/>} />
      <Route exact path='/Profile' element = {<Profile/>} />
      <Route exact path='/Edit' element = {<Edit/>} />
    </Routes>
   </div>

    
  );
}

export default App;

// http://192.168.1.3:3000    