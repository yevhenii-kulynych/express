
export const setScoreAsync = (data) => {
  return {
    type: 'SET_SCORE',
    payload: data
  }
}

export const initApp = () => {
  return {
    type: 'INIT_APP'
  }
}

export const setScoree = () => {

  return dispatch => {

    fetch('http://localhost:5000/api/getScore', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setScoreAsync(data))
      })
  }
}
