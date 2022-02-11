let express = require('express')
var path = require("path");
var testRoute = require('./routes/test')
var userRoute = require("./routes/users")
var app = express()

//Static  middleware
app.use(express.static('views'))

//Application Level Middleware
app.use((req, res, next) => {
    console.log(req.headers)
    next()
})

app.use((req, res, next) => {
    console.log(Date() + " : " + req.url)
    next()
}, (req, res, next) => {
    console.log("I will also get called")
    next()
})


const SERVER_POST = 3000

//Default Route http://localhost:8081/
app.get("/", function(req, res) {
    res.send('<h1>Welcome to Express Web Application')
})

//Add /test middleware routes
app.use("/test", testRoute)
app.use("/user", userRoute)

//app.use("/hello", testRoute)


let onHttpStart = () => {
    console.log(`Server running at http://localhost:${SERVER_POST}`)
}

app.listen(SERVER_POST, onHttpStart)