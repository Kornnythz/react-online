import React, { useState } from "react";
import { Navbar , Nav , NavDropdown , Form , FormControl , Button } from 'react-bootstrap';
import { NavLink , useHistory } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import { UserStoreContext } from "../context/UserContext";
import { useSelector , useDispatch } from 'react-redux'
import { updateProfile } from "../redux/actions/authAction";

const NavBar = () => {

  const { addToast } = useToasts()
  const history = useHistory();
  // const [profile, setProfile] = useState(null)
  // const userStore = React.useContext(UserStoreContext)
  const profileRedux = useSelector((state) => state.authReducer.profile)
  const total = useSelector((state) => state.cartReducer.total)
  const dispatch = useDispatch()


  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem('profile'))
    if(profileValue){
      // setProfile(profileValue)
      // userStore.updateProfile(profileValue)
      dispatch(updateProfile(profileValue))
    }
  }

  React.useEffect(()=>{
      getProfile()
  },[])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    addToast('ลงชื่อออกสำเร็จ' , {appearance: 'success', autoDismiss: true})
    history.replace('/')
    history.go(0)
  }

  return (
    <>
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <NavLink className="navbar-brand" exact to="/">React-Bootstrap</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/product">Product</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/cart">Cart {total} Item(s)</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>{ history.replace("/hospital") }}>Hospital List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{ history.replace("/category") }}>News Category</NavDropdown.Item>
                </NavDropdown>
                <NavLink className="nav-link" activeClassName="active" to="/upload">Upload</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/member">Member</NavLink>
                
            </Nav>
            
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form> */}

            {
              profileRedux ? (
                <span className="nav-text">Welcome {profileRedux.name} <button onClick={logout} className="btn btn-danger ml-2">Logout</button></span>
              ) : (
                  <>
                    <Nav>
                      <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                      <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                    </Nav>
                  </>
              )
            }

            </Navbar.Collapse>
        </Navbar>
    </>
  );
};

export default NavBar;
