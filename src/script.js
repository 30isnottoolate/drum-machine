import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("click");
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display"><p id="displayText"></p></div> 
        <div id="buttons">
          <button id="kick" className="drum-pad" onClick={this.handleClick}>Q
          </button>
          <button id="snare" className="drum-pad" onClick={this.handleClick}>W
          </button>
          <button id="rimshot" className="drum-pad" onClick={this.handleClick}>E
          </button>
          <button id="hhclosed" className="drum-pad" onClick={this.handleClick}>A
          </button>
          <button id="hhopen" className="drum-pad" onClick={this.handleClick}>S
          </button>
          <button id="tom" className="drum-pad" onClick={this.handleClick}>D
          </button>
          <button id="crash" className="drum-pad" onClick={this.handleClick}>Z
          </button>
          <button id="china" className="drum-pad" onClick={this.handleClick}>X
          </button>
          <button id="cowbell" className="drum-pad" onClick={this.handleClick}>C
          </button>
        </div>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<DrumMachine/>);
