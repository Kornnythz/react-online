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
import CreatePage from './pages/category/CreatePage';
import EditPage from './pages/category/EditPage';

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
          {/* <Route path="/category">
            <IndexPage />
          </Route> */}
          <Route path="/category" render={ ({ match: {url} }) => (
            <>
              <Route path={`${url}/`} exact><IndexPage/></Route>
              <Route path={`${url}/create`}><CreatePage/></Route>
              <Route path={`${url}/edit/:id`}><EditPage/></Route>
            </>
          ) }></Route>
        </Switch>

        <Footer/>
    </Router>
  );
}

export default App;
