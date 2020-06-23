import React from 'react';
import { ReactComponent as CancelIcon } from '../Icons/cancel.svg';

const menuItems = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const Menu = ({ setIsOpen }) => (
  <div className="menu">
    <CancelIcon onClick={() => setIsOpen(false)} className="icon icon--close" />
    <ul className="menuList">
      {menuItems.map(item => (
        <li key={item} className="menuListItem">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
