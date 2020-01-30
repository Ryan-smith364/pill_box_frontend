import './App.css';
import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Navbar from  './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import PillSearch from './components/PillSearch';
import Home from './components/Home';
import PillDisplay from './components/PillDisplay';
import ListDisplay from './components/ListDisplay';
import ListsDisplay from './components/ListsDisplay';
import ListForm from './components/ListForm';
// Route, Redirect,



export default  class App extends React.Component{
  constructor(){
    super()

    this.state = {
      pills: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pills')
    .then(resp => resp.json())
    .then(json => this.setState({pills : json}))
  }

  render(){
    return (
      <React.Fragment>

        <Navbar/>
        
         <Switch>
          <Route path='/' component={Home}/> 
          <Route path='/login'component={Login}/> 
          <Route path='/signup'component={Signup}/> 
          <Route path='/pills/display/:id'component={PillDisplay}/> 
          <Route path='/pills/search'component={PillSearch}/> 
          <Route path='/lists/display/:id'component={ListDisplay}/> 
          <Route path='/lists/display'component={ListsDisplay}/>
          <Route path='/new-pill-list'component={ListForm}/> 

        </Switch> 
      </React.Fragment>
    )
  }
}