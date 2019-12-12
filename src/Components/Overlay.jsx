import React from 'react'
import { BrowserRouter, Route,Link,Switch } from 'react-router-dom'

const Overlay=({title,description,closeOverlay,url,image})=>{

return (

  <div className='overlay'>
    <div className="title">
      <h1>{title}</h1>
      </div>
      <div className="main-section">

        <img className="overlay-img" src={image}/>



    <p>{description}</p>
      </div>
   <Link to='/'><p className='closeOverlay'> close</p></Link>

  </div>

)


}

export default Overlay
