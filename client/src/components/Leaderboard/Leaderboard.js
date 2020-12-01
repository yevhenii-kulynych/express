import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Leaderboard.css";


const Leaderboard = () => {

  const [isOpened, setOpened] = useState(false);
  const getContainerRef = useRef(null);
  // const [score, setScore] = useState([]);
  const score = useSelector(state => state.score);

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

    // fetch('http://localhost:5000/api/getScore', {
    //   method: 'GET',
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setScore(data)
    //   })

  }, [])
  console.log(score)
  const getData = (obj) => {

    // const sortedUser = obj.sort((a, b) => b.score - a.score);
    //
    // const limitUsers = [];
    // limitUsers.push(...sortedUser);
    // limitUsers.length = 15;
    //
    // return limitUsers.map((el, index) => {
    //     return (
    //       <li key={ index }> { index + 1 }: { el.name } - <code>{ el.score }</code></li>
    //       )
    // })
  }



  return (
      <div className="leaderboard" ref={getContainerRef}>
        <header className="leaderboard__head">
          <button onClick={handleClick}>&#9819;</button>
        </header>
        <div className="leaderboard__body">
          <h1 className="title">Leaderboard</h1>
          <div className="table">
            <ul>{  }</ul>
          </div>
        </div>
      </div>
  )
}

export default Leaderboard;