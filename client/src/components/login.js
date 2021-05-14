import React, {useState} from 'react'

const Login = () => {

    const [user, setuser]= useState({
        name:"",
        email:"",
        password:""
    })


    let name, value
    const handleinputs = (e)=>{
       name=e.target.name
       value=e.target.value

       setuser({...user, [name]:value})
    }

    const postdata = () =>{
        const {name, email, password}= user

        fetch("http://localhost:3000/register", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name:name , email:email , password:password
            })
        })
    }

    return (
        <>
        <div>
            <label htmlFor="">name</label>
            <input type="text" name="name" value={user.name} onChange={handleinputs} />
        </div>

         <div>
            <label htmlFor="">email</label>
            <input type="text" name="email" value={user.email} onChange={handleinputs} />
        </div>

         <div>
            <label htmlFor="">password</label>
            <input type="text" name="password" value={user.password} onChange={handleinputs} />
        </div>

        <button onClick={postdata}>register</button>

        </>
    )
}

export default Login
