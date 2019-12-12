import React, {Component} from 'react';
import { BrowserRouter, Route,Link } from 'react-router-dom'
import './App.css';
import Frontpage from './Components/Frontpage'





  class App extends Component {

    constructor(props) {
      super(props);

  }


  render(){



  return (

    <Frontpage/>




  );
}

}
export default App;
