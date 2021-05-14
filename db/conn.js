const mongoose = require("mongoose");
const  db = 'mongodb+srv://kiran:kiran7117@@cluster0.i64pm.mongodb.net/mernstackone?retryWrites=true&w=majority'
// const db = process.env.con 

mongoose.connect(db, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database connection successful")
})
.catch(()=>{
    console.log("No connection ")
    

})
