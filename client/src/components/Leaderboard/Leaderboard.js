import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Leaderboard.css";
import { getScore } from "../../actions/GetScore";

const Leaderboard = () => {

  const [isOpened, setOpened] = useState(false);
  const getContainerRef = useRef(null);
  const score = useSelector(state => state.score);
  const dispatch = useDispatch();

  const handleClick = () => {

    if (isOpened) {

      setOpened(false)
    } else {
      setOpened(true);
    }
  }

  useEffect(() => {

    if(isOpened) {

      getContainerRef.current.style.right = '0rem';
    } else {
      getContainerRef.current.style.right = '-15rem';
    }

  }, [isOpened]);

  useEffect(() => {

    dispatch(getScore());
  }, [dispatch])

  console.log('Leaderboard: ' + score)

  const getData = (obj) => {

    const sortedUser = obj.sort((a, b) => b.score - a.score);

    const limitUsers = [];
    limitUsers.push(...sortedUser);
    limitUsers.length = 15;

    return limitUsers.map((el, index) => {
        return (
          <li key={ index }><code>{ index + 1 }) <span>{ el.name }</span> - </code>{ el.score }<div><code className="date">Date - { new Date(el.date).toLocaleString() }</code></div></li>
          )
    })
  }

  return (
      <div className="leaderboard" ref={getContainerRef}>
        <header className="leaderboard__head">
          <button onClick={handleClick}>&#9819;</button>
        </header>
        <div className="leaderboard__body">
          <h1 className="title">Leaderboard</h1>
          <div className="table">
            <ul>{ getData(score) }</ul>
          </div>
        </div>
      </div>
  )
}

export default Leaderboard;