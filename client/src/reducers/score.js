
const initialState = [];

const scoreReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_SCORE':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default scoreReducer;