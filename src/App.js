import './App.css';
import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Navbar from  './components/Navbar'

// Route, Redirect,



export default  class App extends React.Component{

  componentDidMount(){
    fetch('http://localhost:3000/pills')
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

  render(){
    return (
      <React.Fragment>

        <Navbar/>

        <Switch>
          <Route/> log
          <Route/> sign
          <Route/> home
          <Route/> singlepill
          <Route/> pillsearch
          <Route/> singlelist
          <Route/> listlist
          <Route/> listform
        </Switch>
      </React.Fragment>
    )
  }
}


