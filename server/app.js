const express = require("express")
const path = require("path")
const userRoutes = require("./routes/user")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", userRoutes)

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/public/index.html"))
})

const port = process.env.PORT || 3001
app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`)
})
