import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/freshcart-logo.svg"
import { AuthContext } from '../../Context/authantication'
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/Cartcontext';
import {Nav, Navbar, Container, NavDropdown,Form,button} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
export default function NavbarComp() {
   
  const {token,setToken} = useContext(AuthContext);
  const {numOfcartitems}= useContext(cartContext);
  const navFunc = useNavigate();



  function logout(){
    localStorage.removeItem('tkn');
    setToken(null);
    navFunc('/login');
  }
  
 
  return <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {token ? (
              <>
                <Nav.Link as={Link} to="/products" active>Products</Nav.Link>
                <Nav.Link as={Link} to="/category">Categories</Nav.Link>
                <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
                <Nav.Link as={Link} to="/cart">
                Cart{' '}
                  <span className="position-relative">
                    {numOfcartitems >= 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {numOfcartitems}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    )}
                  </span>
                </Nav.Link>
                <Nav.Link as={Link} to="/allorders">AllOrders</Nav.Link>
              </>
            ) : null}
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Nav.Item>
              <FontAwesomeIcon icon={faFacebook} className="me-2" />
              <FontAwesomeIcon icon={faTwitter} className="me-2" />
              <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
              <FontAwesomeIcon icon={faLinkedin} className="me-2" />
            </Nav.Item>
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={logout} style={{ cursor: 'pointer' }}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" >
      <img src={logo} alt='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {token ? <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products" >Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category" >Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brands" >Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link position-relative"  to="/cart">Cart  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {numOfcartitems}
    <span className="visually-hidden">unread messages</span>
  </span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/allorders">AllOrders</Link>
        </li>
       </>:""}
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li className='nav-item'>
            <i className='fa-brands me-2 fa-facebook-f'></i>
            <i className='fa-brands me-2 fa-twitter'></i>
            <i className='fa-brands me-2 fa-whatsapp'></i>
            <i className='fa-brands me-2 fa-linkedin'></i>
        </li>
        {token ? <>
          <li className="nav-item">
          <Link className="nav-link " to="/profile">Profile</Link>
        </li>
          <li className="nav-item">
          <span onClick={logout} style={{cursor:'pointer'}}  className="nav-link" >Logout</span>
        </li>
        </>:  <>  <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/register">Register</Link>
        </li></>}
      
       
      
      </ul>
    </div>
  </div>
</nav> */}

    </>
  
}
