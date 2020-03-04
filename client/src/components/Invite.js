import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/Invite.css"

export default props => {
  const { user, add, noGo, allGoing } = useRandom()

  return (
    <div className="wrapper">
      <div className="buttonDiv">
        <Link to={"/going"} className="goingButton">
          <button onClick={e => allGoing()}>Going:</button>
        </Link>
        <Link to={"/notgoing"} className="notGoingButton">
          <button>Not Going:</button>
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
      {/* <button onClick={e => random()}>GET</button> */}
    </div>
  )
}
