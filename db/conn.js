const mongoose = require("mongoose");

const db = process.env.con 

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
