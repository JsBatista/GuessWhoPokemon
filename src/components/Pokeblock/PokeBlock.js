import React from 'react';

let style = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    textAlign: 'center',
    padding: '3px',
    margin: '5px',
    width: '170px',
    marginBottom: '0px',
    height: '200px'
}

const pokeBlock = (props) => {
    return(
        <div style={style} onClick={()=>{props.mark(props.name)}}>
            <img src={props.img} style={{width: '100px', margin: 'auto'}} />
            <h2>{props.name}</h2>
        </div> 
    );
}

export default pokeBlock;
