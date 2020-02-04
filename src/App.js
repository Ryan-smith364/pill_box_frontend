import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import { Switch, Route, withRouter} from 'react-router-dom'
import Navbar from  './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import PillSearch from './components/PillSearch';
import Home from './components/Home';
import PillDisplay from './components/PillDisplay';
import ListDisplay from './components/ListDisplay';
import ListsDisplay from './components/ListsDisplay';
import ListForm from './components/ListForm';
import {fetchPills} from './actions/index'
// Route, Redirect,



class App extends React.Component{

  componentDidMount(){
    this.props.fetchPills()
    // this.fetchUsers()
  }

  render(){
    return (
      <React.Fragment>

        <Navbar/>
        
         <Switch>
          <Route path={`/lists/display/:id`} component={ListDisplay}/> 
          <Route path={`/pills/display/:id`} component={PillDisplay}/> 
          <Route path='/signup'component={Signup}/> 
          <Route path='/pills/search'component={PillSearch}/> 
          <Route path='/new-pill-list'component={ListForm}/> 
          <Route path='/lists/display'component={ListsDisplay}/>
          <Route path='/login'component={Login}/> 
          <Route path='/' component={Home}/> 

        </Switch> 
      </React.Fragment>
    )
  }

}
const mapDispatchToProps = (dispatch) => ({
  fetchPills: () => {dispatch(fetchPills())}
})

export default withRouter(connect(null, mapDispatchToProps)(App));
