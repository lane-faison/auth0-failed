require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Currently listening on PORT ${PORT}`)
})
