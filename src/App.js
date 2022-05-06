import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";
 import Footer from './components/Footer';
 import Navbar from './components/NavBar';
 import  Projects from './components/Projects/Projects';
 import Resume from './components/Resume/Resume';
 import {Routes,Route} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Navbar /> 
  <Routes>
     <Route path="/" element={   <Home/>  }/>
     <Route  path="/about" element={<About />}/>
     <Route  path="/Projects" element={<Projects />}/>
     <Route  path="/Resume" element={<Resume />}/>
     
  </Routes>
     < Footer/>
    </div>
  );
}

export default App;
