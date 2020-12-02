import React, {useEffect, useRef} from "react";
import "./Score.css";
import { useSelector, useDispatch } from "react-redux";
import { newGame } from "../../actions/NewGame";
import { getScore } from "../../actions/GetScore";

const Score = props => {

  const inputRef = useRef(null);
  const score = useSelector(state => state.counter);
  const doAgain = useSelector(state => state.doAgain);
  const dispatch = useDispatch();

  useEffect(() => {

    props.handle();
  }, [score, props]);


  const saveScore = (userScore, name) => {

    const temp = {};
    temp.name = name;
    temp.score = userScore;
  
    return temp;
  }

  const setScore = obj => {

    fetch('http://localhost:5000/api/setScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })

  }

  return (
      <>
        <div className="result">
          <p className="score">{ score }</p>
          <span className="hint">press Space</span>
        </div>
        { doAgain ?
            <div className="brt-wrap">
              <div className="result-wrap">
                <input ref={ inputRef } type="text" placeholder="enter your name..."/>
              </div>
              <button className="again-btn" onClick={() => {
                dispatch(newGame());
                setScore(saveScore(score, inputRef.current.value));
                dispatch(getScore());
                }}>
                Again
              </button>
            </div> :
            <div>

            </div>
        }

      </>
  )
}

export default Score;