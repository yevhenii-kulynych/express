
export const getScoreAsync = (data) => {
  return {
    type: 'GET_SCORE',
    payload: data
  }
}

export const getScore = () => {

  return dispatch => {

    fetch('http://localhost:5000/api/getScore', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch(getScoreAsync(data))
      })
  }
}
