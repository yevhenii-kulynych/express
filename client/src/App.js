import React from 'react';
import './App.css';
import StartScreen from "./components/StartScreen/StartScreen";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Gameboard from "./components/Gameboard/Gameboard";
import { useSelector } from "react-redux";


function App() {
  const isPrepared = useSelector(state => state.isPrepared);

  return (
    <div className="App">
      {!isPrepared
          ?
          <StartScreen>

          </StartScreen>
          :
          <Gameboard>

          </Gameboard>
      }
      <Leaderboard>

      </Leaderboard>
    </div>
  );
}

export default App;
