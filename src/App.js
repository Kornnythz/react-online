import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import ContactusPage from './pages/ContactusPage';
import HospitalPage from './pages/hospital/HospitalPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexPage from './pages/category/IndexPage';

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
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>
          <Route path="/contact">
            <ContactusPage />
          </Route>
          <Route path="/hospital">
            <HospitalPage />
          </Route>
          <Route path="/category">
            <IndexPage />
          </Route>
        </Switch>

        <Footer/>
    </Router>
  );
}

export default App;
