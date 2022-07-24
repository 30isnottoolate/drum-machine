import React, { createRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './DrumMachine.css';

const samples = {
  "Q": {
    "id": "kick",
    "display": "Kick",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/30[kb]BDRUM13.wav.mp3"
  },
  "W": {
    "id": "snare",
    "display": "Snare",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/35[kb]SNARE2.wav.mp3"
  },
  "E": {
    "id": "rimshot",
    "display": "Rimshot",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/18[kb]RIMSHOT1.wav.mp3"
  },
  "A": {
    "id": "hhclosed",
    "display": "Closed Hihat",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/16[kb]HHCLOSE2.wav.mp3"
  },
  "S": {
    "id": "hhopen",
    "display": "Open Hihat",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/35[kb]HHOPEN1.wav.mp3"
  },
  "D": {
    "id": "tom",
    "display": "Tom",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/29[kb]TOMHI5.wav.mp3"
  },
  "Z": {
    "id": "crash",
    "display": "Crash",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/106[kb]CRASH.wav.mp3"
  },
  "X": {
    "id": "china",
    "display": "China",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/188[kb]CHINA1.wav.mp3"
  },
  "C": {
    "id": "cowbell",
    "display": "Cowbell",
    "src": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/12[kb]COWBELL1.wav.mp3"
  },
}

const Display = (props) => (
  <div id="display">
    <p id="displayText">{props.text}</p>
  </div> 
)

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Samples Ready",
      volume: 1
    }

    this.kick = React.createRef();
    this.snare = React.createRef();
    this.rimshot = React.createRef();
    this.hhclosed = React.createRef();
    this.hhopen = React.createRef();
    this.tom = React.createRef();
    this.crash = React.createRef();
    this.china = React.createRef();
    this.cowbell = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);

    for (const item in samples) {
      this[samples[item].id].audioEl.current.load();
    }
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  handleKeyPress(e) {
    let trigger = e.key.toUpperCase();
    
    if (samples.hasOwnProperty(trigger)) {
      let currentSample = this[samples[trigger].id].audioEl.current;
      currentSample.currentTime = 0;
      currentSample.play();
      
      this.setState({
        display: samples[trigger].display
      });
    }
  }

  handleClick(e) {
    let currentSample = this[e.target.id].audioEl.current;

    currentSample.play();
    currentSample.currentTime = 0;

    this.setState({
      display: samples[e.target.innerText].display
    });
  }

  handleVolume(e) {
    this.setState({
      volume: e.target.value
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="model">
          <p id="model-name">SuperSonic Drum 2000</p>
        </div>
        <Display text={this.state.display}/>
        <div id="buttons">
          <button id="kick" className="drum-pad" onClick={this.handleClick}>Q
            <ReactAudioPlayer id="Q" ref={(element) => { this.kick = element; }} className="clip" src={samples["Q"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="snare" className="drum-pad" onClick={this.handleClick}>W
            <ReactAudioPlayer id="W" ref={(element) => { this.snare = element; }} className="clip" src={samples["W"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="rimshot" className="drum-pad" onClick={this.handleClick}>E
            <ReactAudioPlayer id="E" ref={(element) => { this.rimshot = element; }} className="clip" src={samples["E"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="hhclosed" className="drum-pad" onClick={this.handleClick}>A
            <ReactAudioPlayer id="A" ref={(element) => { this.hhclosed = element; }} className="clip" src={samples["A"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="hhopen" className="drum-pad" onClick={this.handleClick}>S
            <ReactAudioPlayer id="S" ref={(element) => { this.hhopen = element; }} className="clip" src={samples["S"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="tom" className="drum-pad" onClick={this.handleClick}>D
            <ReactAudioPlayer id="D" ref={(element) => { this.tom = element; }} className="clip" src={samples["D"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="crash" className="drum-pad" onClick={this.handleClick}>Z
            <ReactAudioPlayer id="Z" ref={(element) => { this.crash = element; }} className="clip" src={samples["Z"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="china" className="drum-pad" onClick={this.handleClick}>X
            <ReactAudioPlayer id="X" ref={(element) => { this.china = element; }} className="clip" src={samples["X"].src} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="cowbell" className="drum-pad" onClick={this.handleClick}>C
            <ReactAudioPlayer id="C" ref={(element) => { this.cowbell = element; }} className="clip" src={samples["C"].src} volume={parseFloat(this.state.volume)} />
          </button>
        </div>
        <div id="fader-container">
          <input id="volume-fader" type="range" min="0" max="1" step="0.01" value={this.state.volume} onChange={this.handleVolume}/>
        </div>
        <div id="volume-display">
          <p id="volume-text" >{Math.round(this.state.volume*100)}</p>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
