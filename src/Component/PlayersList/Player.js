import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, salary, img } = props.playerData;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="d-flex flex-row m-3 player-details">
            <div>
                <img className="player-img" src={img} alt="" />
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <h3>Name: {name}</h3>
                    <h4>Salary: {salary} TAKA</h4>
                    <button
                        onClick={() => handleAddPlayer(props.playerData)}
                        className="btn btn-primary mt-3"
                    > 
                    <FontAwesomeIcon icon={faUsers}/> Add to Team
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;