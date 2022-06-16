// ? HELPFUL FUNCTION FOR AUTHORISATION

// * Function to get token from local storage
export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('women-that-shred')
}


// * Function splits the token (^) and return the payload
export const getPayload = () => {
  const token = getTokenFromLocalStorage()
  console.log('token ----->', token)

  if (!token) return
  // ^ if the token is empty STOP

  const payload = token.split('.')[1]
  console.log('payload ----->', payload)

  console.log('JSON.parse(atob(payload)) ---->', JSON.parse(atob(payload)))
  return JSON.parse(atob(payload))
}


// * Function that checks user is authenticated
export const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  // ^ Check the payload exists

  const currentTime = Math.floor(Date.now() / 1000)
  return currentTime < payload.exp
  // ^ get today's timestamp in secs
  // compare it against token expiry
  // returns boolean false if invalid
}


// * Check payload id matches user.id
export const userIsOwner = (prelovedBoard) => {
  const payload = getPayload()
  if (!payload) return
  return prelovedBoard.addedBy.id === payload.sub
}