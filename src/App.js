import './App.css';
import Header from './Component/Header/Header';
import PlayersList from './Component/PlayersList/PlayersList';
import SelectedPlayer from './Component/SelectedPlayer/SelectedPlayer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import playersData from './playersFakeData.json';
import { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersData);
  }, [])

  const [addedPlayer, setAddedPlayer] = useState([]);
  const [playerId, setPlayerId] = useState([]);

  const handleAddPlayer = (props) => {
    const id = props.id;
    const isUnique = playerId.indexOf(id);
    if (isUnique === -1) {
      const newAddedPlayer = [...addedPlayer, props];
      setAddedPlayer(newAddedPlayer);
      const newAllId = [...playerId, id];
      setPlayerId(newAllId);
    }
  }
  return (
    <div>
      <Header></Header>

      <section className="mt-5">
        <div className="row">
          <div className="col-md-8">
            <PlayersList handleAddPlayer={handleAddPlayer} players={players}></PlayersList>
          </div>
          <div className="col-md-4">
            <SelectedPlayer addedPlayer={addedPlayer}></SelectedPlayer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
