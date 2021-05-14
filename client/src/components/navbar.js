import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../img/logo.jpg'
import {NavLink}  from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" className="img" />KiranKodes</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">aboutus</NavLink>
          </li>

          <li className="nav-item">
               <NavLink className="nav-link" to="/service">Service</NavLink>
           </li>
            <li className="nav-item">              <NavLink className="nav-link" to="/contactus">Contactus</NavLink>             </li>

            <li className="nav-item">
             <NavLink className="nav-link" to="/signin">Signin</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Signup</NavLink>   
                        </li>

             <li className="nav-item">
               <NavLink className="nav-link" to="/login">Login</NavLink>
             </li>
         
        </ul>
       
      </div>
    </nav>
    )
}

export default Navbar


// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import {NavLink} from "react-router-dom"
// import logo from  "../img/logo.jpg"

// const Navbar = () => {
//     return (
//       <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" className="img" />KiranKodes</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/aboutus">About us</NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/service">Service</NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contactus">Contactus</NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/signin">Signin</NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/signup">Signup</NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/login">Login</NavLink>
//             </li>
//           </ul>
           
         
//         </div>
//       </div>
//     </nav>

//     </>
           
        
//     )
// }

// export default Navbar
