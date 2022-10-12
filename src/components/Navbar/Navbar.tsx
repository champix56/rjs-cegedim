import React, { FC } from 'react';
import  './Navbar.css';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className="Navbar" data-testid="Navbar">
    Navbar Component
  </div>
);

export default Navbar;
