import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from './component/Navbar';
import Project from './component/Project'
import Services from './component/Services'
import ContactMe from './component/ContactMe'
import AboutMe from './component/AboutMe';
import Second from "./component/Second";




function App() {
  return (
    <div>
<Router>
  <Navbar/>

  

  <Routes>
    <Route exact path="/" element={<AboutMe/>} />
   

  </Routes>
</Router>
</div>


  );
}

export default App;
