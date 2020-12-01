import React, { useState, useEffect } from 'react';
import './StartScreen.css';
import { useSelector, useDispatch } from "react-redux";
import { start } from "../../actions/Start";
import Preparation from "../Preparation/Preparation";


const StartScreen = () => {

  const [mobile, setMobile] = useState(false)
  const dispatch = useDispatch();
  const isStarted = useSelector(state => state.isStarted);

  const checkDevise = () => {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      
      setMobile(true)
     }
  }

  useEffect(() => {

    checkDevise();
  }, [mobile])

  return (
    <div className="center">

      { !isStarted ?
        <div className="start-screen">

          { !mobile ?

            <div className="no-mobile">
              <p className="text">Hello there, this tiny game was made to have fun with friends</p>
              <p className="text">Rules : you have 5 sec to press Space button as much as you can :)</p>
              <div>
                <button className="btn" onClick={() => dispatch(start())}>Start</button>
              </div>
            </div>
            :
            <div className="mobile">
              <p className="text">Oops.. mobile does`t have Space button.</p>
              <p className="text">Open it on PC :)</p>
            </div>
          }
        </div>
        :
        <Preparation>

        </Preparation>
      }
    </div>
  )
}

export default StartScreen;