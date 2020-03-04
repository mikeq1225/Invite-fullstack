import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_RANDOM = "Invite/GET_RANDOM"
const ADD_GOING = "Invite/ADD_GOING"

const initialState = {
  user: {},
  going: [],
  notGoing: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM:
      return { ...state, user: action.payload }
    case ADD_GOING:
      return { ...state, going: action.payload }
    default:
      return state
  }
}

function getRandom() {
  return dispatch => {
    axios.get("/api").then(resp => {
      dispatch({
        type: GET_RANDOM,
        payload: resp.data
      })
    })
  }
}

// for adding users to going array on backend
function addGoing(user) {
  return dispatch => {
    axios.post("/api/going", { user }).then(resp => {
      dispatch(getRandom())
    })
  }
}

// for adding users to notGoing array on backend
function notGoing(user) {
  return dispatch => {
    axios.post("/api/notgoing", { user }).then(resp => {
      dispatch(getRandom())
    })
  }
}

// for getting all users in going array?????
function getGoing() {
  return dispatch => {
    axios.get("/api/going").then(resp => {
      console.log(resp.data)
      dispatch({
        type: ADD_GOING,
        payload: resp.data
      })
    })
  }
}

export function useRandom() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.randomState.user)
  const person = useSelector(appState => appState.randomState.going)
  // const random = () => dispatch(getRandom())
  const add = user => dispatch(addGoing(user))
  const noGo = user => dispatch(notGoing(user))
  const allGoing = () => dispatch(getGoing())

  useEffect(() => {
    dispatch(getRandom())
    dispatch(getGoing())
  }, [dispatch])
  return { user, add, noGo, person, allGoing }
}
