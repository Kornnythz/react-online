import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          
        </Switch>

        <Footer/>
    </Router>
  );
}

export default App;
