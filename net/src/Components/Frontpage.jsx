import React, {Component} from 'react';
import axios from 'axios'
import { BrowserRouter, Route,Link,Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Overlay from './Overlay'


const Data = 'https://api.themoviedb.org/3/movie/upcoming?api_key=a7ef6403bb9fe8159ddb4f2a9b2b428d'
const Data2 = 'https://api.themoviedb.org/3/movie/popular?api_key=a7ef6403bb9fe8159ddb4f2a9b2b428d'

  class Frontpage extends Component {

    constructor(props) {
      super(props);

      this.state = {
        movies:[],
        popular:[],
        title:"",
        description:"",
        showOverlay:false,
        url:"",
        image:""

}

  }


async componentDidMount(){
  const response = await axios.get(Data)
  const popular=await axios.get(Data2)

  this.setState({
    movies:response.data.results,
    popular:popular.data.results
  })


console.log(this.state.movies)

}

eventHandler=(e)=>{

console.log(e.target.dataset)

this.setState({
  title:e.target.dataset.text,
  description:e.target.dataset.overview,
  url:e.target.dataset.url,
  image:e.target.dataset.image


})




}







  render(){

    const {title,description,url,image}=this.state



  return (
    <BrowserRouter>

    <div className="App">

  <Route exact  path="/" render={ () =>  <Navbar/>}/>
  <Route exact  path="/" render={ () =>     <Header name="Upcoming"/>}/>
  <Route exact  path="/" render={ () =>   <Main test={this.state.url}movies={this.state.movies} eventHandler={this.eventHandler}/>}/>
  <Route exact  path="/" render={ () =>     <Header name="Popular"/>}/>
    <Route exact  path="/" render={ () =>   <Main test={this.state.url}movies={this.state.popular} eventHandler={this.eventHandler}/>}/>


  <Route exact  path="/info" render={ () =>   <Overlay  title={title} description={description} image={image}closeOverlay={this.closeOverlay} />}/>


            {



                /*

                  <div className="container">

                    </div>
                        <Main  test={this.state.url}movies={this.state.movies} eventHandler={this.eventHandler}/>
                        <Overlay url={url} title={title} description={description} closeOverlay={this.closeOverlay} display={this.state.display}/>

                <Header name="Popular"/>
                  <Main movies={this.state.popular} eventHandler={this.eventHandler}/>
               <Overlay url={url} title={title} description={description} closeOverlay={this.closeOverlay} display={this.state.display}/>
            */}

    </div>

    </BrowserRouter>

  );
}

}
export default Frontpage;
