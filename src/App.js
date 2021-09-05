import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Sidenav from "./components/Sidenav";

import ResumePage from "./pages/Resume";

import "./css/_app.css";
import "./css/components/_body.css";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

function App() {
  const [isOpen, toggleSidebar] = useState(false);

  return (
    <Router>
      <div className="App">
        <Menu isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="main">
          <Sidenav isOpen={isOpen} />
          <Profile />
          <Switch>
            <Route path="/resume" component={ResumePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
