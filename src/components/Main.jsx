import React, { useState } from 'react';

import Gallery from './Gallery';
import Info from './Info';
import Selection from './Selection';

import altai1 from '../Img/altai-1.jpg';
import altai2 from '../Img/altai-2.jpg';
import siberia1 from '../Img/siberia-1.jpg';
import siberia2 from '../Img/siberia-2.jpg';
import urals1 from '../Img/urals-1.jpg';
import urals2 from '../Img/urals-2.jpg';

const gallerySource = {
  0: { gallery: [altai1, altai2] },
  1: { gallery: [siberia1, siberia2] },
  2: { gallery: [urals1, urals2] },
};
const selectionList = [
  { id: 0, name: 'Алтай' },
  { id: 1, name: 'Сибирь' },
  { id: 2, name: 'Урал' },
];

const Main = () => {
  const [gallery] = useState(gallerySource);
  const [selectionId, setSelectionId] = useState(1);

  return (
    <main className="main main--home">
      <div className="main__cell">
        <Gallery gallery={gallery[selectionId].gallery} />
      </div>
      <div className="main__cell">
        <Info />
        <Selection
          selectionList={selectionList}
          selectionId={selectionId}
          setSelectionId={setSelectionId}
        />
      </div>
    </main>
  );
};

export default Main;
