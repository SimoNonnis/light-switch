import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = ({ gallery }) => (
  <div className="gallery">
    <AutoplaySlider play={true}>
      {gallery.map(g => (
        <div key={g} data-src={g} />
      ))}
    </AutoplaySlider>
  </div>
);

export default Gallery;
