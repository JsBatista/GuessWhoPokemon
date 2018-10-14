import React from 'react';

const winScreen = (props) => {
    return(
        <div>
            <h1>YOU WON!</h1>
            <h2>You guessed {props.oponent}'s pokemon {props.pokemon}</h2>
        </div>
    );
}

export default winScreen;
