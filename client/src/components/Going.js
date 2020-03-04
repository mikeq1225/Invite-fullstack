import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/Going.css"

export default props => {
  const { person } = useRandom()

  return (
    <div className="goingWrapper">
      <div className="buttonDiv">
        <Link to={"/going"} className="goingButton">
          <button>See who is Going</button>
        </Link>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/notgoing"} className="notGoingButton">
          <button>See who is Not Going</button>
        </Link>
      </div>
      <div className="userContainer">
        {person.map(user => (
          <div className="person" key={"user" + user.id}>
            <img src={user.img} alt="headshot" />
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
