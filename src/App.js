import "./App.css";
import Home from "./Components/Home";
import CaloriesCalculator from "./Components/CaloriesCalculator/CaloriesCalculator";
import DiabetesCal from "./Components/DiabetesCal/DiabetesCal";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Nav className="me-auto">
            <Container>
              <nav className="AppNav">
                <Link to="/"> Home</Link>
                <Link to="/CaloriesCalculator">Calories Calculator</Link>
                <Link to="/DiabetesCal">Diabetes Risk Calculator</Link>
              </nav>
            </Container>
          </Nav>
        </Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/CaloriesCalculator"
          element={<CaloriesCalculator />}
        ></Route>
        <Route path="/DiabetesCal" element={<DiabetesCal />}></Route>
      </Routes>

      <div className="footer">
        <footer className="app-footer">
          <p>
            Empowering healthier lives, one step at a time. © 2024{" "}
            <span>VitalCheck</span>. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
