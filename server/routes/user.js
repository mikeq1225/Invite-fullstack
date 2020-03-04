const express = require("express")
const router = express.Router()
const axios = require("axios")

let users = []
let userId = 0
let going = []
let notGoing = []

router.get("/", (req, res, next) => {
  axios.get("https://randomuser.me/api").then(resp => {
    const obj = resp.data.results[0]
    const user = {
      img: obj.picture.large,
      name: `${obj.name.first} ${obj.name.last}`,
      phone: obj.phone,
      email: obj.email
    }
    userId++
    users.push({ ...user, id: userId })
    res.json({
      ...user,
      id: userId
    })
  })
})

//for adding user to the going array
router.post("/going", (req, res, next) => {
  going.push(req.body.user)
  res.json({
    ...going
  })
})

//for sending going array back
router.get("/going", (req, res, next) => {
  res.json(going)
})

//for adding user to the notGoing array
router.post("/notgoing", (req, res, next) => {
  notGoing.push(req.body.user)
  res.json({
    ...notGoing
  })
})

//for sending notGoing array back
router.get("/notgoing", (req, res, next) => {
  res.json(notGoing)
})

module.exports = router
