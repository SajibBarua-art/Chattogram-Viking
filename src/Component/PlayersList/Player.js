import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Player.css";
const Player = (props) => {
    const { name, salary, img } = props.player;
    console.log(props.player);
    return (
        <div className="d-flex flex-row m-3 player-details">
            <div>
                <img className="player-img" src={img} alt="" />
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <h3>Name: {name}</h3>
                    <h4>Salary: {salary} TAKA</h4>
                    <button className="btn btn-primary mt-3">Get Him</button>
                </div>
            </div>
        </div>
    );
};

export default Player;