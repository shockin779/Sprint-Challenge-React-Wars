import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
    console.log(props);
    return(
        <div className='character'>
            <p>{props.character.name}</p>
        </div>
    );
}

export default CharacterCard;