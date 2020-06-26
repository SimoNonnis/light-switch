import React from 'react';

import Gallery from './Gallery';
import Info from './Info';
import Selection from './Selection';

const Main = () => (
  <main className="main main--home">
    <div className="main__cell">
      <Gallery />
    </div>
    <div className="main__cell">
      <Info />
      <Selection />
    </div>
  </main>
);

export default Main;
