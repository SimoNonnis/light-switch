import React from 'react';
import { ReactComponent as CancelIcon } from '../Icons/cancel.svg';

const Menu = ({ setIsOpen }) => (
  <div className="menu">
    <CancelIcon onClick={() => setIsOpen(false)} className="icon" />
  </div>
);

export default Menu;
