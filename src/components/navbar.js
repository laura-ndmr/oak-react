import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './button';
import Dropdown from './dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const [button] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="images/oak-logo.svg" alt="oak-logo" className="logo-img"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to ="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services <i className="fas fa-caret-down"></i></Link>
              <Dropdown />
            </li>
            <li className="nav-item">
              <Link to ="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
                Contact
              </Link>
              {button && <Button buttonStyle='btn--outline'>Contact</Button>}
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar
