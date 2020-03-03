import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_RANDOM = "Invite/GET_RANDOM"

const initialState = {
  user: {
    name: {
      first: "",
      last: ""
    },
    phone: "",
    email: "",
    picture: {
      medium: ""
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

function getRandom() {
  return dispatch => {
    axios.get("https://randomuser.me/api/").then(resp => {
      const data = resp.data.results[0]
      dispatch({
        type: GET_RANDOM,
        payload: data
      })
    })
  }
}

export function useRandom() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.randomState.user)
  const random = () => dispatch(getRandom())

  useEffect(() => {
    dispatch(getRandom())
  }, [dispatch])
  return { user, random }
}
