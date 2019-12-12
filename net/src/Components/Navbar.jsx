import React from 'react';
import logo from '../img/Netflix.png'
import App from '../App.css'


const Navbar=()=>{

return (
<nav className='nav'>
<div className='logo-img'>
  <img className='logo' src={logo} />
  </div>

  <div className='searchBar'>
   <input type='text'/> <button type="submit">seach </button>
   </div>
   <div className='account'>
    <span>&#9940;</span>
   </div>
</nav>
)



}

export default Navbar
