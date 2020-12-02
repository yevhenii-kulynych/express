
const initialState = [];

const scoreReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_SCORE':
      return [...action.payload]
    case 'INIT_APP':
      return state
    default:
      return state
  }
}

export default scoreReducer;