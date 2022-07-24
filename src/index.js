import React from 'react';
import ReactDOM from 'react-dom/client';
import DrumMachine from './DrumMachine';

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>
);
