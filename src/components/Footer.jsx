import React from 'react';
import menuItems from './menuItems';
const Footer = () => (
  <footer className="footer">
    <ul className="footerList">
      {menuItems.map(item => (
        <li key={item} className="footerListItem">
          {item}
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
