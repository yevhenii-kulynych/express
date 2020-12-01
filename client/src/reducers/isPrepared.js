
const isPrepared = (state = false, action) => {
  switch (action.type) {
    case "READY":
      return state = true
    case "NEW_GAME":
      return state = false
    default:
      return state;
  }
}

export default isPrepared;