import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import ContactusPage from './pages/ContactusPage';
import HospitalPage from './pages/hospital/HospitalPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from './pages/category/IndexPage';
import CreatePage from './pages/category/CreatePage';
import EditPage from './pages/category/EditPage';
import UploadPage from './pages/UploadPage';
import { ToastProvider } from 'react-toast-notifications'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MemberPage from './pages/MemberPage';
import PrivateRoute from './guard/auth';
import UserStoreProvider from './context/UserContext';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers/index';
import CartPage from './pages/CartPage';

const store = createStore(rootReducer)

function App() {

  return (
    <Provider store={store}>
    <UserStoreProvider>
    <ToastProvider placement="top-center">
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
            <Route path="/cart">
              <CartPage />
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
            <Route path="/upload">
              <UploadPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/member">
              <MemberPage />
            </PrivateRoute>
          </Switch>

          <Footer/>
      </Router>
    </ToastProvider>
    </UserStoreProvider>
    </Provider>
  );
}

export default App;
