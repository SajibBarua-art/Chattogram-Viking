import React from 'react';

const SelectedPlayer = (props) => {
    const selectedPlayer = props.addedPlayer;
    return (
        <div>
            <h3>Total Selected Players are: {selectedPlayer.length}</h3>
            <h4 className="mt-3"><b>Selected Players Name: </b></h4>
            {
                 selectedPlayer.map((addedPlayer) => 
                     <ul>
                         <li>{addedPlayer.name}</li>
                     </ul>
                 )
            }
            
        </div>
    );
};

export default SelectedPlayer;