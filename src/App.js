import './App.css';
import Header from './Component/Header/Header';
import PlayersList from './Component/PlayersList/PlayersList';
import SelectedPlayer from './Component/SelectedPlayer/SelectedPlayer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <section className="mt-5">
        <div className="row">
        <div className="col-md-8">
          <PlayersList></PlayersList>
        </div>
        <div className="col-md-4">
          <SelectedPlayer></SelectedPlayer>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
