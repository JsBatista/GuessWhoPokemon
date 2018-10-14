import React, {Component} from 'react';
import PokeBlock from '../Pokeblock/PokeBlock';
import firebase from 'firebase';
import WinScreen from './WinScreen/WinScreen';
import LoseScreen from './LoseScreen/LoseScreen';

class Game extends Component {

    state = {
        blocks: [
            {
                name: "abra",
                isMarked: false, 
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f3fe49995g93f37he5h4105f70c4f906gx3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "geodude",
                isMarked: false, 
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f2d534h0c3cdf366819d33f5g5g25e218x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "machop",
                isMarked: false, 
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f469310f3893gcd28g6fdhc3e4fdh64h5x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "horsea",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2ff8dc34386201fgd6439ec22g6314d766x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "poliwag",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f226e8663e465c508f07fg9gd7df4450fx3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "gastly",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f32881de82f62d73g56h425dc38eg73chx3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "growlithe",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2fch2dc6657c265g6953e16f8301e14gc0x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "vulpix",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f06f4c8f9ff519h4969d9g549825e3927x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "squirtle",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2fegdc1737dg7d24h620e2c6d832c51910x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "eevee",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f2588325cc2fd41cf34h6cf318g6g1255x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "oddish",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2fg562df835e241h0dc9f6h8gff60485e5x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "exeggcute",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2fd5fed368651hedhe8846egce9002h45gx3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "bulbasaur",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2ff6dcfh62he447224341e69d60c24d6h0x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "charmander",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f67h1ef31c11d0gh00f4h5h30feh51fe4x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "scyther",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2fdefec138cg1d45682e6gegd9314fh98fx3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "psyduck",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f352e1gd659h9e919dh5eed2962eh42e8x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "seel",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f4g99g90630d930gd1h7e0c9462g62f44x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "pikachu",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f2727654h8f1g3043747775634f524de6x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "omanyte",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2fgdc0295e4f842c89g195ef160e1e6e99x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "sandshrew",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f808cgd437460h14d3695c6f003g227h6x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "tentacool",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f7hde5c59962244de6f981f599g742ghgx3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "krabby",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f41405fedf5d79dcd6e0f91e31fd33377x3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "snorlax",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f091c4e34hd54232f4he6f1gc696193hcx3fk32e.octmx3dkocig_$/$"
            },
            {
                name: "dratini",
                isMarked: false,
                shadow: "https://c-8oqtgrjgwu46x24f4j5f64x78ml6hwwx2eenqwfhtqpvx2epgv.g00.sporcle.com/g03/3_c-8yyy.urqteng.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff4j5f64x78ml6hww.enqwfhtqpv.pgvx2f905178e161f0g67216f1dg2872208150x3fk32e.octmx3dkocig_$/$"
            }
        ],
        spriteStyle: "https://img.pokemondb.net/artwork/",
        guess: "",
        gameStatus: 'going'
    }


    changeStyle = (e) => {
        this.setState({
            spriteStyle: e.target.value
        });
    }

    markBlock = (name) => {
        let tempState = {...this.state};
        let index = tempState.blocks.map((c) => c.name).indexOf(name.charAt(0).toLowerCase() + name.substr(1));
        tempState.blocks[index].isMarked = !(tempState.blocks[index].isMarked);
        this.setState({...tempState});
    }

    guessHandler = (e) => {
        this.setState({
            guess: e.target.value
        });
    }

    makeAGuess = () => {

        let databaseRef = firebase.database().ref('games/'+this.props.room).on('value', snap=>{
            let room = snap.val();
            if(this.props.name == room.player1 && this.state.guess == room.player2Pokemon){
                this.setState({
                    gameStatus: 'won',
                    oponent: room.player2
                });
            }
            else if(this.props.name == room.player2 && this.state.guess == room.player1Pokemon){
                this.setState({
                    gameStatus: 'won',
                    oponent: room.player1
                });
            }
            else {
                this.setState({
                    gameStatus: 'lose'
                });
            }
        });

    }

    render(){
        let blocks = this.state.blocks.map((current) => (current.isMarked ? <PokeBlock 
            mark = {this.markBlock}
            name={current.name.charAt(0).toUpperCase() + current.name.substr(1)} 
            img={current.shadow}/> : <PokeBlock 
            mark = {this.markBlock}
            name={current.name.charAt(0).toUpperCase() + current.name.substr(1)} 
            img={this.state.spriteStyle + current.name + (this.state.spriteStyle == "https://img.pokemondb.net/artwork/"? ".jpg" : ".png")}
            />));

        let style = {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: '15px'
        }

        let guessOptions = this.state.blocks.map((current)=>{
            return <option value={current.name}>{current.name.charAt(0).toUpperCase() + current.name.substr(1)}</option>
        });

        if(this.state.gameStatus == 'won'){
            return(
                <WinScreen oponent={this.state.oponent} pokemon={this.state.guess}/>
            );
        }
        if(this.state.gameStatus == 'lose'){
            return(
                <LoseScreen />
            );
        }

        return(
            <div>
                <h1>Room: {this.props.room}</h1>
                <h1>Oponent's: {this.props.oponent}</h1>
                <h2>Choose Your Sprite Style:</h2>
                <select onChange={(e)=>{this.guessHandler(e)}}>
                    {guessOptions}
                </select>
                <button onClick={()=>{this.makeAGuess()}}>Guess!</button>
                <select onChange={this.changeStyle}>
                    <option value={"https://img.pokemondb.net/sprites/red-blue/normal/"}>Generation 1</option>
                    <option value={"https://img.pokemondb.net/sprites/silver/normal/"}>Generation 2</option>
                    <option value={"https://img.pokemondb.net/sprites/ruby-sapphire/normal/"}>Generation 3</option>
                    <option value={"https://img.pokemondb.net/sprites/diamond-pearl/normal/"}>Generation 4</option>
                    <option value={"https://img.pokemondb.net/sprites/black-white/normal/"}>Generation 5</option>
                    <option value={"https://img.pokemondb.net/artwork/"} selected>Fancy</option>
                </select>
                <h1>Your pokemon:</h1>
                <PokeBlock 
                    mark = {()=>{}}
                    name={this.props.choosed.charAt(0).toUpperCase() + this.props.choosed.substr(1)} 
                    img={this.state.spriteStyle + this.props.choosed + (this.state.spriteStyle == "https://img.pokemondb.net/artwork/"? ".jpg" : ".png")}/>

                <div style={style}>
                    {blocks}
                </div>
            </div>
        );
    };
}

export default Game;
