import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_RANDOM = "Invite/GET_RANDOM"
const ADD_GOING = "Invite/ADD_GOING"
const NOT_GOING = "Invite/NOT_GOING"

const initialState = {
  user: {},
  goingArr: [],
  notGoingArr: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM:
      return { ...state, user: action.payload }
    case ADD_GOING:
      return { ...state, goingArr: action.payload }
    case NOT_GOING:
      return { ...state, notGoingArr: action.payload }
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
function addNotGoing(user) {
  return dispatch => {
    axios.post("/api/notgoing", { user }).then(resp => {
      dispatch(getRandom())
    })
  }
}

// for getting all users in going array
function getGoing() {
  return dispatch => {
    axios.get("/api/going").then(resp => {
      dispatch({
        type: ADD_GOING,
        payload: resp.data
      })
    })
  }
}

// for getting all users in notGoing array
function getNotGoing() {
  return dispatch => {
    axios.get("/api/notgoing").then(resp => {
      dispatch({
        type: NOT_GOING,
        payload: resp.data
      })
    })
  }
}

export function useRandom() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.randomState.user)
  const person = useSelector(appState => appState.randomState.goingArr)
  const people = useSelector(appState => appState.randomState.notGoingArr)
  // const random = () => dispatch(getRandom())
  // const add = user => dispatch(addGoing(user))
  // const noGo = user => dispatch(addNotGoing(user))
  const allGoing = () => dispatch(getGoing())
  const notGoing = () => dispatch(getNotGoing())

  useEffect(() => {
    dispatch(getRandom())
    dispatch(getGoing())
    dispatch(getNotGoing())
  }, [dispatch])
  return {
    user,
    person,
    allGoing,
    notGoing,
    people
  }
}
