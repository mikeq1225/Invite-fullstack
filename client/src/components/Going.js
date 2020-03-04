import React from "react"
// import axios from "axios"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { person } = useRandom()

  return (
    <div>
      {/* {user.map(person => ( */}
      <div className="person">
        <img src={person.img} alt="headshot" />
        <p>Name: {person.name}</p>
        <p>Phone: {person.phone}</p>
        <p>Email: {person.email}</p>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
      {/* ))} */}
    </div>
  )
}
