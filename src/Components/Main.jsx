import React from 'react'
import Movie from './Movie'

const Data='https://image.tmdb.org/t/p/original/'


const Main=(props)=>{

return (
    <div className='container'>
  <main >

{
  props.movies.map((item,index) =>( <Movie key={index} image={item.poster_path} test={props.test} url={item.poster_path} id={item.id} title={item.title} overview={item.overview} eventHandler={props.eventHandler}/>))
}

</main>
</div>
)

}




export default Main
