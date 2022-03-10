import React, {Component} from 'react';
import './css/style.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      tempo: 0,
      botao1: 'Go!',
      botao2: 'Clear'
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao1 = 'Go!';
    }
    else{
      this.timer = setInterval(()=>{
        state.tempo += 0.1;
        this.setState(state);
      }, 100);
      state.botao1 = 'Pause';
    }
    this.setState(state);
  }

  clear(){
    let state = this.state;
    clearInterval(this.timer);
    this.timer = null;
    state.tempo = 0;
    state.botao1 = 'Go!';
    this.setState(state);
  }

  render(){
    return(
      <div className="container" align='center'>
        <img src={require('./assets/cronometro.png')} className="img"/>
        <a className="timer">{this.state.tempo.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.start}>{this.state.botao1}</a>
          <a className="botao" onClick={this.clear}>{this.state.botao2}</a>
        </div>
      </div>
    );
  }
}

export default App;