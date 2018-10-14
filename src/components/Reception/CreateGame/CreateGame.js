import React, {Component} from 'react';
import firebase from 'firebase';

class CreateGame extends Component{
    state={
        gameName: "",
        playerName: ""
    }

    gameNameHandler = (e) => {
        this.setState({
            gameName: e.target.value
        })
    }

    playerNameHandler = (e) => {
        this.setState({
            playerName: e.target.value
        })
    }

    generateRandomPokemon = () => {
        let pokemons = ["abra", "geodude", "machop", "horsea", "poliwag", "gastly", "growlithe", "vulpix", "scyther", "eevee", "oddish", "exeggcute", "bulbasaur", "charmander", "scyther", "psyduck", "seel", "pikachu", "omanyte", "sandshrew", "tentacool", "krabby", "snorlax", "dratini", ];
        return pokemons[Math.floor(Math.random()*24)];
    }

    createGame = () => {
        let randomPokemon = this.generateRandomPokemon();
        firebase.database().ref('games/'+this.state.gameName).set({
            player1: this.state.playerName,
            status: 'avaiable',
            player1Pokemon: randomPokemon,
            player1Won: false,
            player2Won: false
        }).then( ()=>{this.props.back('wait', this.state.playerName, randomPokemon, this.state.gameName)} );
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.props.back('','','','')}}>Go Back</button>
                <h2>Create New Game!</h2>
                <input type="text" placeholder="Nome da Sala" value={this.state.gameName} onChange={(e)=>{this.gameNameHandler(e)}}/>
                <input type="text" placeholder="Seu Nome de Jogador" value={this.state.playerName} onChange={(e)=>{this.playerNameHandler(e)}}/>
                <button onClick={()=>{this.createGame()}}>Create New Game!</button>
            </div>
        );
    }
}

export default CreateGame;
