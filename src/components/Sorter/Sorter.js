import React from 'react';

const sorter = (props) => {
    let pokemons = ["abra", "geodude", "machop", "horsea", "poliwag", "gastly", "growlithe", "vulpix", "scyther", "eevee", "oddish", "exeggcute", "bulbasaur", "charmander", "scyther", "psyduck", "seel", "pikachu", "omanyte", "sandshrew", "tentacool", "krabby", "snorlax", "dratini", ];
    return(
        <div>
            <button onClick={()=>{
                props.choosePokemon(pokemons[Math.floor(Math.random()*24)])
            }}>
            PLAY!
            </button>
        </div>
    );    
}

export default sorter;
