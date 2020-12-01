import React, { useState, useEffect } from "react";
import "./Preparation.css";
import { useDispatch } from "react-redux";
import { ready } from "../../actions/Ready";

const Preparation = () => {

  const [countdown, setCountDown] = useState(3)
  const dispatch = useDispatch();

  useEffect(() => {

    const interval = setInterval(() => {

      setCountDown(countdown - 1);
    },1000)

    if(countdown === 0) {
      dispatch(ready());
    }

    return () => {
      clearInterval(interval);
    }

  },[countdown, dispatch])

  return (
      <div>
        <p className="countdown-lite">{ countdown }</p>
      </div>
  )
}

export default Preparation;