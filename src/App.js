import React, {Component} from 'react';
import './css/estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      frase: ''
    };

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.fechaBiscoito = this.fechaBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state =this.state;
    let numAleatorio = Math.floor(Math.random() * this.frases.length);
    state.frase = '" ' + this.frases[numAleatorio] + ' "';
    this.setState(state);
  }

  fechaBiscoito(){
    let state =this.state;
    state.frase = '';
    this.setState(state);
  }

  render(){
    return(
      <div className='container' align='center'>
        <img src={require('./assets/biscoito.png')} className='imgBiscoito'/>
        <br/>
        <Botao nome='Abrir biscoito' acaoBtn={this.quebraBiscoito}/>
        <Botao nome='Fechar biscoito' acaoBtn={this.fechaBiscoito}/>
        <h3 className='textoFrase'>{this.state.frase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;