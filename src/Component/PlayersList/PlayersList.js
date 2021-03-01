import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Player from './Player';

const PlayersList = (props) => {
    const players = props.players;
    return (
        <div>
            {
                players.map((player) => 
                <Player 
                    handleAddPlayer={props.handleAddPlayer} 
                    playerData={player}
                ></Player>)
            }
        </div>
    );
};

export default PlayersList;