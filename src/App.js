import React, { Component } from 'react';
import Sorter from './components/Sorter/Sorter';
import Game from './components/Game/Game';
import PokeBlock from './components/Pokeblock/PokeBlock';
import Reception from './components/Reception/Reception';

class App extends Component {
  state={
    readyToPlay: false,
    playerChoose: "eevee",
    uniqueCode: "BLANK"
  }

  choosePokemon = (pokemon) => {
    this.setState({
        readyToPlay: true,
        playerChoose: pokemon,
        uniqueCode: Math.random().toString(36).substr(2, 4)

      });
  }

  render() {
    return(
      <Reception />
    );
  }
  /*
  render() {
    let renderedComponent = this.state.readyToPlay ? 
      <Game choosed={this.state.playerChoose} code={this.state.uniqueCode}/> 
      : <Sorter choosePokemon={this.choosePokemon} />;
    
    return (
      <div>
          {renderedComponent}
      </div>
    );
  }*/
}

export default App;
