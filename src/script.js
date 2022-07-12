import React from 'react';
import ReactDOM from 'react-dom/client';
import './app_styles.css';

let samples = document.getElementsByClassName("clip"); //Array of audio tags
let currentSample; //Triggered audio
let trigger; //Key press or click which triggered the audio

const sampleSource = {
  "kick": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/30[kb]BDRUM13.wav.mp3",
  "snare": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/35[kb]SNARE2.wav.mp3",
  "rimshot": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/18[kb]RIMSHOT1.wav.mp3",
  "hhclosed": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/16[kb]HHCLOSE2.wav.mp3",
  "hhopen": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/35[kb]HHOPEN1.wav.mp3",
  "tom": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/29[kb]TOMHI5.wav.mp3",
  "crash": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/106[kb]CRASH.wav.mp3",
  "china": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/188[kb]CHINA1.wav.mp3",
  "cowbell": "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/12[kb]COWBELL1.wav.mp3"
}

const textToDisplay = {
  "Q": "Kick",
  "W": "Snare",
  "E": "Rimshot",
  "A": "Closed Hihat",
  "S": "Open Hihat",
  "D": "Tom",
  "Z": "Crash",
  "X": "China",
  "C": "Cowbell"
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("click");
  }

  handleClick(e) {
    trigger = e.target.innerText;
    currentSample = document.getElementById(trigger);
    currentSample.currentTime = 0;
    currentSample.play();

    this.setState({
      display: textToDisplay[trigger]
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="model">
          <p id="model-name">SuperSonic Drum 2000</p>
        </div>
        <Display text={this.state.display}/>
        <div id="display"><p id="displayText"></p></div> 
        <div id="buttons">
        <button id="kick" className="drum-pad" onClick={this.handleClick}>Q
            <audio id="Q" className="clip" src={sampleSource.kick}></audio>
          </button>
          <button id="snare" className="drum-pad" onClick={this.handleClick}>W
            <audio id="W" className="clip" src={sampleSource.snare}></audio>
          </button>
          <button id="rimshot" className="drum-pad" onClick={this.handleClick}>E
            <audio id="E" className="clip" src={sampleSource.rimshot}></audio>
          </button>
          <button id="hhclosed" className="drum-pad" onClick={this.handleClick}>A
            <audio id="A" className="clip" src={sampleSource.hhclosed}></audio>
          </button>
          <button id="hhopen" className="drum-pad" onClick={this.handleClick}>S
            <audio id="S" className="clip" src={sampleSource.hhopen}></audio>
          </button>
          <button id="tom" className="drum-pad" onClick={this.handleClick}>D
            <audio id="D" className="clip" src={sampleSource.tom}></audio>
          </button>
          <button id="crash" className="drum-pad" onClick={this.handleClick}>Z
            <audio id="Z" className="clip" src={sampleSource.crash}></audio>
          </button>
          <button id="china" className="drum-pad" onClick={this.handleClick}>X
            <audio id="X" className="clip" src={sampleSource.china}></audio>
          </button>
          <button id="cowbell" className="drum-pad" onClick={this.handleClick}>C
            <audio id="C" className="clip" src={sampleSource.cowbell}></audio>
          </button>
        </div>
      </div>
    );
  }
}

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<DrumMachine/>);
