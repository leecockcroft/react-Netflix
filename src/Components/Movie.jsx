import React from "react";
import { BrowserRouter, Route,Link,Switch } from 'react-router-dom'



const Movie=(props)=>{
const Data='https://image.tmdb.org/t/p/original/'
console.log(props.id)
let test=props.id

return(

  <div>|

    <Link to='/info'><img className='movie-img' data-url={props.id} data-text={props.title} data-overview={props.overview} data-image={Data+props.image} src={Data+props.url} onClick={props.eventHandler}/></Link>


</div>

)


}

export default Movie
