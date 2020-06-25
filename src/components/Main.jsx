import React from 'react';

import Gallery from './Gallery';
import Info from './Info';
import Selection from './Selection';

const Main = () => (
  <main className="main">
    <Gallery />
    <div>
      <Info />
      <Selection />
    </div>
  </main>
);

export default Main;
