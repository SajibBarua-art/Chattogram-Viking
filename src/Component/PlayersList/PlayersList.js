import React, { useEffect, useState } from 'react';
import playersData from '../../playersData.json';
import Player from './Player';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const PlayersList = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playersData);
    },[])
    
    return (
        <div>
            {
                players.map((player) => <Player player={player}></Player>)
            }
        </div>
    );
};

export default PlayersList;