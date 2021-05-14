import React, {useState } from 'react'
import { useHistory }  from 'react-router-dom'

const Signup = () => {

        
    // const history = useHistory();
    const demo = useHistory()
        // let temp
        const [user, setuser] = useState({
            name:"", email:"", password:""
        })
   
        let name , value 
        const handleinputs = (e)=>{
            
            name = e.target.name
            value = e.target.value
   
            setuser({...user, [name]:value})
        }
       //  const [temp , settemp]= useState("")
        const change =async ()=>{

           //  setstate("kiran7117")
           // // settemp()
           // const arr = { name: user.name , email: user.email , password: user.password }
   
           // settemp([...temp, arr])
           // console.log(arr)
   
           const {name, email, password} = user
             demo.push("/about")
           const res = await fetch("/register", {
               method:"POST",
               headers:  {
                   "Content-Type" :  "application/json"
               },
               body: JSON.stringify({
                   // name, email, phone, work, password, cpassword
                   name:name, email:email, password:password })
   
           }) 


           const data = await res.json();

           if (data.status === 422 || !data){
               window.alert("invalid registeration")
               console.log("invalid registeration")
           }
           else{
               window.alert("successful registeration")
               console.log("sucessful registeration")
   
               
           }
           console.log("working")
           demo.push("/")
           console.log("working12")
   
        //    history.push("/about")
   
        }
       return (
           <>
            {/* <h1>{state}</h1> */}
            <div>
                <h1>{user.name}</h1>
            </div>
            <div>
            <label htmlFor="email">email</label>
            <input type="text" name="email"  value={user.email} onChange={handleinputs} />
            </div>
   
            <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name"  value={user.name} onChange={handleinputs} />
            </div>
   
            <div>
            <label htmlFor="passwor">password</label>
            <input type="text" name="password"  value={user.password} onChange={handleinputs} />
            </div>
   
            {/* <h1>{temp}</h1> */}
             <button onClick={change}>click</button>
   
             {/* <div>
                 {
                     temp.map((e)=>{
                         return (
                         <div>
                             <p>e.name</p>
                             <p>e.email</p>
                             <p>e.password</p>
                         </div>
                         )
                     })
                 }
             </div>
                */}
           </>
       )

//     const [user, setuser ] = useState({
//         name:"",
//         email:"",
//         password:""
//     })

//     let name, value 
//     const making =(e)=>{
//         name= e.target.name
//         value=e.target.value

//         setuser({...user, [name]:value})
//     }

//     const change = () =>{
          
//         const {name, email, password }= user

//         fetch("/register", {
//             method:"POST",
//             headers:  {
//                 "Content-Type" :  "application/json"
//             },
//             body: JSON.stringify({
//                 // name, email, phone, work, password, cpassword
//                 name:name, email:email, password:password
//             })
//         })

//     //     fetch("/register", {
//     //         method:"POST",
//     //         headers:  {
//     //             "Content-Type" :  "application/json"
//     //         },
//     //         body: JSON.stringify({
//     //             // name, email, phone, work, password, cpassword
//     //           name:name , email : email , password: password          })
//     // })
// }
//     return (
//         <div>
//               <h1> welcome to signup page </h1>
              
//                   <div>
//                       <label htmlFor="name">name</label>
//                       <input type="text" name="name" value={user.name} onChange={making} />
//                   </div>

//                   <div>
//                       <label htmlFor="email">email</label>
//                       <input type="text" name="email" value={user.email} onChange={making} />
//                   </div>

//                   <div>
//                       <label htmlFor="password">password</label>
//                       <input type="text" name="password" value={user.password} onChange={making} />
//                   </div>

//                   <div>
//                       <button onClick={change}>register</button>
//                   </div>
            
//         </div>
//     )
}

export default Signup
