import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
// import data from "./util";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
