import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="row">
            <Link to="/" className="nav__logo">
              <FontAwesomeIcon icon="landmark" />
              <div className="nav__title">AIC Armory</div>
            </Link>
            <button onClick={openMenu} className="btn__menu">
              <FontAwesomeIcon icon="bars" />
            </button>
            <div className="nav__links">
              <ul>
                <li>
                  <Link to="/" className="nav__link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="nav__link">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="nav__link--primary">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="menu__backdrop">
              <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon="times" />
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <Link to="/" className="menu__link">
                  Home
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/about" className="menu__link">
                  About 
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/contact" className="menu__link">
                  Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav