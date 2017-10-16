const express = require("express")
const app = express()
const request = require("request")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.send("HELLO")
})

app.listen(3000, () => {
  console.log("RUNNING ON localhost:3000")
})
