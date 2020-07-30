import React from 'react';
import Index from './Index.jsx';
import ReactDOM from 'react-dom';
import ThingsToDoCarousel from './components/ThingsToDoComponents/ThingsToDoCarousel.jsx';
import ThingsToKnowSection from './components/ThingsToKnowComponents/ThingsToKnow.jsx';

ReactDOM.render(<Index />, document.getElementById('description'));
ReactDOM.render(
  <ThingsToKnowSection />,
  document.getElementById('thingsToKnow')
);

ReactDOM.render(
  <ThingsToDoCarousel />,
  document.getElementById('things-to-do-carousel')
);
