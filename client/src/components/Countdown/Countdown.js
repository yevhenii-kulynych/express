import React, { useState, useEffect } from "react";
import './Countdown.css';
import {  useDispatch } from "react-redux";
import { again } from "../../actions/Again";

const Countdown = props => {
  const dispatch = useDispatch();
  let [countdown, setCountDown] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {

      setCountDown(countdown - 1)
    },1000)

    if (countdown === 0) {

      document.removeEventListener('keyup', props.customEvent);
      clearInterval(interval);
      dispatch(again());
    }

    return () => {
      clearInterval(interval);
    }

  },[countdown, dispatch, props])

  return (
      <div className="main-countdown">
        <p className="time">00:0{ countdown }</p>
      </div>
  )
}

export default Countdown;