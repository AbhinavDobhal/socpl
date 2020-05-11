import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./contents/Home";
import About from "./contents/About";
import Services from "./contents/Services";
import Team from "./contents/Team";
import Jobs from "./contents/Jobs";
import Contact from "./contents/Contact";
import Clients from "./contents/Clients";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </Router>
  );
}

export default App;
