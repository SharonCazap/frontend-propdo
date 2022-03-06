import React from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from '../../logo.svg';
import './App.css';
import RealEstate from "../../pages/real-estate";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/real-estate">Real Estate</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/real-estate" exact element={<RealEstate/>}/>
          <Route path="/map">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
