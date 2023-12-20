<<<<<<< HEAD:src/components/navbar/Navbar.tsx
import React from 'react';
import styles from './Navbar.module.css';
import PropTypes from 'prop-types';

const Navbar = (props) => (
  <div className={styles.Navbar} data-testid="Navbar">
=======
import React, { FC } from 'react';
import  './Navbar.css';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className="Navbar" data-testid="Navbar">
>>>>>>> c661830d9a0a344c97184da43ed0e9f588381797:src/components/Navbar/Navbar.tsx
    Navbar Component
  </div>
);
Navbar.propTypes={

};
Navbar.defaultProps={

};
export default Navbar;
