var express = require('express')

var router = express.Router()

//Default Route http://localhost:8081/test
router.get("/", (req, res) => {
    res.send('<h1>GET - Test Page')
})

//http://localhost:8081/test
router.post("/post", (req, res) => {
    res.send('<h1>POST - Test Page')
})

router.put("/", (req, res) => {
    res.send('<h1>PUT - Test Page')
})

router.delete("/", (req, res) => {
    res.send('<h1>DELETE - Test Page')
})

router.patch("/", (req, res) => {
    res.send('<h1>PATCH - Test Page')
})

module.exports = router