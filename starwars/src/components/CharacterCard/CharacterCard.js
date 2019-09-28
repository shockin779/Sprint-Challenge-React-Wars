import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
    return(
        <div className='characterCard'>
            <h2>{props.character.name}</h2>
            <div className='stats'>
                <p>Height: {props.character.height}</p>
                <p>Mass: {props.character.mass}</p>
                <p>Gender: {props.character.gender}</p>
                <p>Birth Year: {props.character.birth_year}</p>
            </div>
        </div>
    );
}

export default CharacterCard;