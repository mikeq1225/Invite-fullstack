import React, { useState } from "react"
import axios from "axios"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/Invite.css"

export default props => {
  const { user, random } = useRandom()

  return (
    <div className="wrapper">
      <img src={user.picture.large} />
      <p>
        Name: {user.name.first} {user.name.last}
      </p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      <Link to={"/going"}>
        <button>Going</button>
      </Link>
      <Link to={"/going"}>
        <button>Not Going</button>
      </Link>
      {/* <button onClick={e => random()}>GET</button> */}
    </div>
  )
}
