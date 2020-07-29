import React from 'react';
import Index from './Index.jsx';
import ReactDOM from 'react-dom';
import ThingsToDoCarousel from './components/ThingsToDoComponents/ThingsToDoCarousel.jsx';

ReactDOM.render(
  <ThingsToDoCarousel />,
  document.getElementById('things-to-do-carousel')
);
ReactDOM.render(<Index />, document.getElementById('description'));
