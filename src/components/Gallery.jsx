import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Gallery = () => (
  <div className="gallery">
    <AwesomeSlider>
      <div data-src="../img/siberia-1.png" />
      <div data-src="../img/siberia-2.jpg" />
    </AwesomeSlider>
  </div>
);

export default Gallery;
