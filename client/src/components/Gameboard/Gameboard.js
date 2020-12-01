import React from "react";
import "./Gameboard.css";
import Score from "../Score/Score";
import Countdown from "../Countdown/Countdown";
import { increment } from "../../actions/Increment";
import { useDispatch } from "react-redux";

const Gameboard = () => {

  const dispatch = useDispatch();

  function pressSpaceBar(event) {

    if (event.keyCode === 32) {
      dispatch(increment())
    }
  }

  const handleKey = () => {
    document.addEventListener('keyup', pressSpaceBar)
  }

  return (
      <div className="gameboard">
        <Countdown customEvent={pressSpaceBar}>
        </Countdown>

        <Score handle={handleKey}>
        </Score>
      </div>
  )
}

export default Gameboard;