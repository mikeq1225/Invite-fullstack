import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/Invite.css"

export default props => {
  const { user, add, noGo } = useRandom()

  return (
    <div className="wrapper">
      <div className="homeButtonDiv">
        <Link to={"/going"} className="goingButton">
          <button>See who is Going</button>
        </Link>
        <Link to={"/notgoing"} className="notGoingButton">
          <button>See who is Not Going</button>
        </Link>
      </div>
      <div className="person">
        <img src={user.img} alt="headshot" />
        <p>Name: {user.name}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <div className="yesNo">
          <button onClick={e => add(user)}>Yes</button>
          <button onClick={e => noGo(user)}>No</button>
        </div>
      </div>
    </div>
  )
}
