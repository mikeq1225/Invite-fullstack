import React from "react"
// import axios from "axios"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { person } = useRandom()

  return (
    <div>
      {person.map(user => (
        <div className="person" key={"user" + user.id}>
          <img src={user.img} alt="headshot" />
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
