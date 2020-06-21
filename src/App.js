import React from 'react';
import { ReactComponent as MenuIcon } from './Icons/menu.svg';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>Hello Light switch</h1>
      <h2>Start editing to see some magic happen!</h2>
      Icons made by{' '}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {' '}
        www.flaticon.com
      </a>
      <MenuIcon />
    </div>
  );
}
