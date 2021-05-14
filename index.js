// const express = require("express")
// const app =express()

// app.get("/", (req, res )=>{
//    res.send("workind ")
// })

// app.listen(process.env.PORT || 5000)
const express = require("express");
// const dotenv = require("dotenv");
const app = express();
const path = require('path');

// app.use(express.json())
// app.use(require("./router/auth"))


// dotenv.config({path: "./config.env" })
// require("./db/conn")
const port = process.env.port || 8080
app.use(require("./router/auth"))


const middleware = (req, res, next) => {
    console.log("hi middle ware ")
    next();
}

// app.get("/", (req, res)=>{
//     res.send("welcome to home ")
// })

// app.get("/about", middleware, (req, res, )=>{
//     res.send("welcome to about ")
     
// })

// app.get("/service", (req, res)=>{
//     res.send("welcome to service ")
// })

// app.get("/contactus", (req, res)=>{
//     // res.cookie("test", "democontent")
//     res.send("welcome to contactus  ")
// })

// app.get("/signin", (req, res)=>{
//     res.send("welcome to signi  ")
// })

// app.get("/register", (req, res)=>{
//     res.send("welcome to signup ")
// })
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
  }


app.listen(port, ()=>{
    console.log(`listing to port ${port}`)
})