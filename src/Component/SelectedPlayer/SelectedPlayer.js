import React from 'react';


const SelectedPlayer = (props) => {
    const selectedPlayer = props.addedPlayer;
    let totalSalary = 0;
    selectedPlayer.map(player => {
        const { salary } = player;
        totalSalary += salary;
    })
    return (
        <div>
            <h3>Total Selected Players are: {selectedPlayer.length}</h3>
            <h4 className="mt-3"><b>Selected Players Name: </b></h4>
            {
                selectedPlayer.map((addedPlayer) =>
                    <div>
                        <ul>
                            <li><div>
                                <h6> 
                                    Player Name: 
                                    <span style={{color:"blue", fontWeight:"900"}}> {addedPlayer.name}</span>
                                </h6> 
                                <h6> 
                                    Amount of Salary: 
                                    <span style={{color:"tomato", fontWeight:"900"}}> {addedPlayer.salary}</span>
                                </h6>
                            </div></li>
                        </ul>
                    </div>
                )
            }
            <h4>Total amount of salary: <b>{totalSalary}</b></h4>

        </div>
    );
};

export default SelectedPlayer;