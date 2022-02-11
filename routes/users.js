var express = require('express')
var fs = require("fs");

var router = express.Router();

// http://localhost:8081/user/student
router.post('/student', (req, res) => {
    let s = {
        sid: 1,
        fnm: 'Pritesh',
        lnm: "Patel"
    }
    res.send(JSON.stringify(s))
})

// http://localhost:8081/user/empolyee
router.get("/employee", (req, res) => {
    fs.readFile('./data/user.json', (err, data) => {
        res.setHeader('Content-Type', "application/json")
        //res.send(data.toString())
        let user = JSON.parse(data.toString())
        res.json(user)
    })
})

module.exports = router