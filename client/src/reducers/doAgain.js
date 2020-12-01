
const doAgain = (state = false, action) => {
  switch (action.type) {
    case 'AGAIN':
      return state = true
    case 'NEW_GAME':
      return state = false
    default:
      return state;
  }
}

export default doAgain;