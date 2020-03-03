import React from "react"
import { Route } from "react-router-dom"
import Invite from "./Invite.js"
import Going from "./Going.js"
import NotGoing from "./NotGoing.js"

export default props => {
  return (
    <div>
      <Route exact path="/" component={Invite} />
      <Route exact path="/going" component={Going} />
      <Route exact path="/notgoing" component={NotGoing} />
    </div>
  )
}
