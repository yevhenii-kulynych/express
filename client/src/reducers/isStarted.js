
const isStarted = (state = false, action) => {
  switch (action.type) {
    case 'START':
      return state = true
    case 'NEW_GAME':
      return state = false
    default:
      return state
  }
}

export default isStarted;