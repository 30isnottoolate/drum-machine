import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class DrumMachine extends React.Component {
  render() {
    return (
      <div id="app">
        <p>Hit it!</p>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<DrumMachine/>);
