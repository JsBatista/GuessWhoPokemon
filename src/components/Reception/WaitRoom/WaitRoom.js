import React, {Component} from 'react';
import firebase from 'firebase';
import Game from '../../Game/Game';

class WaitRoom extends Component {

    state = {
        ready: false
    }

    componentDidMount(){
        setTimeout(this.checkIfOponentLogged, 5000);
    }

    checkIfOponentLogged = () => {
        let databaseRef = firebase.database().ref('games/'+this.props.room).on('value', snap=>{
            let room = snap.val();
            let oponent = room.player1 == this.props.name ? room.player2 : room.player1;
            room.status == 'ocupied' ? (this.setState({ ready: true, oponent: oponent })) : (setTimeout(this.checkIfOponentLogged, 3000));
        });
    }

    render(){
        if(this.state.ready){
            return(
                <Game choosed={this.props.pokemon} room={this.props.room} name={this.props.name} oponent={this.state.oponent}/>
            );
        }
        return(
            <div>
                <h1>Waiting For Oponent ...</h1>
            </div>
        );
    };

}

export default WaitRoom;
