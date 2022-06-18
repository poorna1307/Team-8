import {Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Campaign from './Components/Campaign'
import Aboutus from './Components/Aboutus'
import Card1 from './Components/Card1'
import Card3 from './Components/Card3'
import Card2 from './Components/Card2'
import Card4 from './Components/Card4'
import Card5 from './Components/Card5'
import Card6 from './Components/Card6'


function App() {
  return(

  <div>
   
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="Home">Jhatkaa</a> 
    <Link className='navbar-brand' to='Home'></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
     
         <li className="nav-item">
          <Link className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Campaign">Campaigns</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Aboutus">Aboutus</Link>
        </li>
  
      </ul>
    </div>
  </div>
</nav>
    
    <Routes>
      <Route path="" element = {<Home />}/>
      <Route path="Campaign"element={ <Campaign/>}/>
      <Route path="Signup"element={<Signup/>}/>
      <Route path="Login"element={<Login/>}/>
      <Route path="Aboutus"element={<Aboutus/>}/>
      <Route path="card1"element={<Card1/>}/>
      <Route path="card1"element={<Card2/>}/>
      <Route path="card1"element={<Card3/>}/>
      <Route path="card1"element={<Card4/>}/>
      <Route path="card1"element={<Card5/>}/>
      <Route path="card1"element={<Card6/>}/>
    </Routes>
      
  </div>

  );
}

export default App;

