import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { NavDropdown, Nav } from 'react-bootstrap';

const Navbarlist = ({ currentUser, onLogout }) => {
  return (
    <div className="container">
      <header className="d-flex justify-content-between py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link" activeClassName="active">
            Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ai-help" className="nav-link" activeClassName="active">
              AI help me!
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
          </li>
        </ul>

        <ul className="nav nav-pills">
          {!currentUser ? (
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" activeClassName="active">
                Sign In
              </NavLink>
            </li>
          ) : (
            <li className="nav-item d-flex align-items-center">
              <NavDropdown title={currentUser} id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/gifts-Page">
                  Wish List
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/questions-page">
                  My Children
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link as={Link} to="/login" onClick={onLogout} className="nav-link ml-2">
                Sign Out
              </Nav.Link>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbarlist;
