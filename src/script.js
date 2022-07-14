import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactAudioPlayer from 'react-audio-player';
import './app_styles.css';

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
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  handleKeyPress(e) {
    trigger = e.key.toUpperCase();
    
    if (textToDisplay.hasOwnProperty(trigger)) {
      currentSample = document.getElementById(trigger);
      currentSample.load();
      currentSample.play();
      
      this.setState({
        display: textToDisplay[trigger]
      });
    }
  }

  handleClick(e) {
    trigger = e.target.innerText;
    currentSample = document.getElementById(trigger);
    currentSample.load();
    currentSample.play();

    this.setState({
      display: textToDisplay[trigger]
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
            <ReactAudioPlayer id="Q" className="clip" src={sampleSource.kick} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="snare" className="drum-pad" onClick={this.handleClick}>W
            <ReactAudioPlayer id="W" className="clip" src={sampleSource.snare} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="rimshot" className="drum-pad" onClick={this.handleClick}>E
            <ReactAudioPlayer id="E" className="clip" src={sampleSource.rimshot} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="hhclosed" className="drum-pad" onClick={this.handleClick}>A
            <ReactAudioPlayer id="A" className="clip" src={sampleSource.hhclosed} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="hhopen" className="drum-pad" onClick={this.handleClick}>S
            <ReactAudioPlayer id="S" className="clip" src={sampleSource.hhopen} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="tom" className="drum-pad" onClick={this.handleClick}>D
            <ReactAudioPlayer id="D" className="clip" src={sampleSource.tom} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="crash" className="drum-pad" onClick={this.handleClick}>Z
            <ReactAudioPlayer id="Z" className="clip" src={sampleSource.crash} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="china" className="drum-pad" onClick={this.handleClick}>X
            <ReactAudioPlayer id="X" className="clip" src={sampleSource.china} volume={parseFloat(this.state.volume)} />
          </button>
          <button id="cowbell" className="drum-pad" onClick={this.handleClick}>C
            <ReactAudioPlayer id="C" className="clip" src={sampleSource.cowbell} volume={parseFloat(this.state.volume)} />
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

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(<DrumMachine/>);
