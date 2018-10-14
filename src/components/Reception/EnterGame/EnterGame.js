import React, {Component} from 'react';
import firebase from 'firebase';

class EnterGame extends Component{
    
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

    enterGame = () => {
        let alreadyChecked = false;
        let databaseRef = firebase.database().ref('games/'+this.state.gameName).on('value', snap=>{
            if(snap.val()){
                let room = snap.val();
                console.log(room);
                if(room.status == 'ocupied' && !alreadyChecked){
                    alert("ROOM IS FULL!")
                }
                if(room.status == 'avaiable'){
                    alreadyChecked = true;
                    let randomPokemon = this.generateRandomPokemon();
                    firebase.database().ref('games/'+this.state.gameName).update({
                        player2: this.state.playerName,
                        status: 'ocupied',
                        player2Pokemon: randomPokemon
                    }).then( ()=>{this.props.back('certain', this.state.playerName, randomPokemon, this.state.gameName, room.player1)} );
                }
            }
            else alert("ROOM NOT FOUND!");
        })
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.props.back('','','','')}}>Go Back</button>
                <h2>Enter Existing Game!</h2>
                <input type="text" placeholder="Nome da Sala" value={this.state.gameName} onChange={(e)=>{this.gameNameHandler(e)}}/>
                <input type="text" placeholder="Seu Nome de Jogador" value={this.state.playerName} onChange={(e)=>{this.playerNameHandler(e)}}/>
                <button onClick={()=>{this.enterGame()}}>Enter The Game!</button>
            </div>
        );
    }
}

export default EnterGame;
