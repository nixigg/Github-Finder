import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({icon, title}) => {
 
    return (
      <nav>
        <h1 className="navbar bg-primary">
          <i className={icon}> {title} </i>
        </h1>
      </nav>
    )
  }


Navbar.defaultProps = {
  title: 'Github',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
