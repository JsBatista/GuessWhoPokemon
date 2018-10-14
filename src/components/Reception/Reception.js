import React, {Component} from 'react';
import CreateGame from './CreateGame/CreateGame';
import EnterGame from './EnterGame/EnterGame';
import WaitRoom from './WaitRoom/WaitRoom';
import Game from '../Game/Game';

class Reception extends Component{
    state = {
        currentComponent: 'none',
        room: "",
        name: "",
        pokemon: ""
    }

    changeCurrentComponent = (newComponent, name, pokemon, room, oponent) => {
        this.setState({
            currentComponent: newComponent,
            name: name,
            pokemon: pokemon,
            room: room,
            oponent: oponent
        });
    }


    render(){
        let renderedComponent;
        switch(this.state.currentComponent){
            case 'create':
                renderedComponent = <CreateGame back={this.changeCurrentComponent}/>
                break;
            case 'enter':
                renderedComponent = <EnterGame back={this.changeCurrentComponent}/>
                break;
            case 'wait':
                renderedComponent = <WaitRoom pokemon={this.state.pokemon} name={this.state.name} room={this.state.room}/>
                break;
            case 'certain':
                renderedComponent = <Game choosed={this.state.pokemon} room={this.state.room} name={this.state.name} oponent={this.state.oponent}/>
                break;
            default:
                renderedComponent = (
                    <div>
                        <button onClick={()=>{this.changeCurrentComponent('create')}}>Create New Game!</button>
                        <button onClick={()=>{this.changeCurrentComponent('enter')}}>Enter Existing Game!</button>
                    </div>);
        }
        return(
            <div>
                <h1>Welcome to Guess The Pokemon!!!</h1>
                {renderedComponent}
            </div>
        );
    }
}

export default Reception;
