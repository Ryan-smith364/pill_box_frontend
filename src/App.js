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
          <Route path='/' render={() => <Home/>}/> 
          <Route path='/login'render={() => <Login/>}/> 
          <Route path='/signup'render={() => <Signup/>}/> 
          <Route path='/singlepill'render={() => <PillDisplay/>}/> 
          <Route path='/pills/search'render={() => <PillSearch/>}/> 
          <Route path='/singlelist'render={() => <ListDisplay/>}/> 
          <Route path='/lists/display'render={() => <ListsDisplay/>}/>
          <Route path='/new-pill-list'render={() => <ListForm/>}/> 

        </Switch> 
      </React.Fragment>
    )
  }
}
