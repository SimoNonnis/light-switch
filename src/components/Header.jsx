import React, { useState } from 'react';
import Menu from './Menu';
import { ReactComponent as MenuIcon } from '../Icons/menu.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <MenuIcon onClick={() => setIsOpen(true)} className="icon" />

      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
