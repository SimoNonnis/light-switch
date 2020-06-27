import React, { useState } from 'react';

import Gallery from './Gallery';
import Info from './Info';
import Selection from './Selection';

import siberia1 from '../Img/siberia-1.jpg';
import siberia2 from '../Img/siberia-2.jpg';

const gallerySource = [siberia1, siberia2];
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
        <Gallery gallery={gallery} />
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
