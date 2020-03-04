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

router.post("/going", (req, res, next) => {
  going.push(req.body.user)
  res.json({
    ...going
  })
  console.log(going)
})

router.get("/going", (req, res, next) => {
  res.json({ going })
})

router.post("/notgoing", (req, res, next) => {
  notGoing.push(req.body.user)
  res.json({
    ...notGoing
  })
  // console.log(notGoing)
})

router.get("/notgoing", (req, res, next) => {
  res.json({ notGoing })
})

// router.post("/", (req, res, next) => {})

// router.get("/:id", (req, res, next) => {
//   const user = users.find(person => person.id == req.params.id)
//   res.json(user)
// })

module.exports = router
