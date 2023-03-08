
import WebNavbar from "./component/header/Navbar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "../src/home.js";



function App() {
 
  function Openaccount(){
    return(
      <h1 style={{color:"red",zIndex:"100",position:"relative"}}>md afroz alam</h1>
    );
  }
  return (
  
    <Router>
      <WebNavbar/>
      <Routes>
        <Route exact path="/home" element ={<Home/>}/>
        <Route exact path="/openaccount" element={<Openaccount/>}/>
        <Route exact path="/service/deposit" element={<Openaccount/>}/>
        <Route exact path="/service/loan" element={<Openaccount/>}/>
        <Route exact path="/service/trajection" element={<Openaccount/>}/>
        <Route exact path="/personalbanking" element={<Openaccount/>}/>
        <Route exact path="/shoping" element={<Openaccount/>}/>
        
       
      </Routes>
    </Router>
   
   
  );
}

export default App;
