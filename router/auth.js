const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require("../model/userschema");
const { json } = require("express");
const jwt = require("jsonwebtoken")


router.get("/about", (req, res )=>{
    res.send(" router page")
})

router.post("/register", async (req, res)=>{
       
        const {name, email,  password } = req.body
        
        
    if(!name || !email || !password  )
    {
        return res.json({error: "fill all the fields"});
    }

    console.log(req.body)
    try {

        const userExist = await  User.findOne({email: email})
        

        if(userExist){
            return res.status(422).json({error:"email already exist "})
        }
        // else if( password != cpassword)
        // {
        //     return res.status(422).json({error:"password not matching  "})
        // }
        else 
        {
        const user = new User({ name:name, email:email, password:password,  });

        await user.save();
        res.status(201).json({message : "user registed successfully "})

        }
       
         // const userRegister = await user.save();
        // if(userRegister)
        // {
        //     res.status(201).json({message : "user registed successfully "})
        // }
    }
    catch(err) {
        console.log(err);
    }
//signin

  router.post("/signin", async (req, res )=>{
      
    const {email, password } = req.body 

    console.log(req.body)

    const userExist =  await User.findOne({email: email})

    if(userExist)
    {
        res.json({message : "login successfull"})
    }
    else
    {
        res.json({error: "data not found "})
    }
})



       
})

router.post("/signup",async (req, res)=>{

    
    const {email, password} = req.body
    

    const userLogin = await User.findOne({email: email})

    if(userLogin)
    {
        // console.log(password)
        // console.log(userLogin.password)
        const isMatch = await bcrypt.compare( password, userLogin.password)

         const token = await userLogin.generateAuthToken();
         console.log(token)

         res.cookie("jwtoken", token, {
             expires:new Date(Date.now()+ 25892000000 ),
             httpOnly:true
         })


        
        if(!isMatch)
        {
            res.json({error : "not found"})
        }
        else
        {
            res.json({message : "successfull"})
        }

        // if(password==userLogin.password)
        // {
        //     res.json({message :"login successful"})
        // }
        // else
        // {
        //     res.json({error : "not found"})
        // }
    }

    else
    {
        res.json({message :"invalid credinicials  777"})
    }


})



module.exports = router;