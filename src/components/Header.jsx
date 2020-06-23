import React from 'react';
import { ReactComponent as MenuIcon } from '../Icons/menu.svg';
import { ReactComponent as CancelIcon } from '../Icons/cancel.svg';

const Header = () => (
  <header className="header">
    Header
    <MenuIcon className="icon" />
    <CancelIcon className="icon" />
  </header>
);

export default Header;
