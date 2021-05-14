import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contactus from './components/Contactus';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Login from './components/login';

function App() {
  return (
   <>
     
     <Navbar/>
     <Switch>
       <Route exact path="/">
          <Home/>
       </Route>

       <Route path="/about">
          <About/>
       </Route>

     <Route path="/service">
          <Services/>
     </Route>

<Route path="/contactus">
    <Contactus/>
</Route>

<Route path="/signin">
<Signin/>
</Route>

<Route path="/signup">
  <Signup/>
</Route>

<Route path="/">
     <Login/>
</Route>
     </Switch>

   </>
  );
}

export default App;
