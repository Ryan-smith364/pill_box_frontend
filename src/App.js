import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import { Switch, Route, withRouter, Redirect} from 'react-router-dom'
import Navbar from  './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import PillSearch from './components/PillSearch';
import Home from './components/Home';
import PillDisplay from './components/PillDisplay';
import ListDisplay from './components/ListDisplay';
import ListsCollection from './containers/ListCollection';
import ListForm from './components/ListForm';
import {fetchPills} from './actions/index'
import Reminder from './components/Reminder';

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
          <Route path={`/lists/display/:id`} render={() => (this.props.currentUser === null)
            ? <Redirect to='/login' /> : <ListDisplay/>
              }
            /> 
          <Route path={`/pills/display/:id`} component={PillDisplay}/> 
          <Route path='/signup'component={Signup}/> 
          <Route path='/reminders'component={Reminder}/> 
          <Route path='/pills/search'component={PillSearch}/> 
          <Route path='/new-pill-list'render={() =>  (this.props.currentUser === null)
            ? <Redirect to='/login' /> : <ListForm/> }/> 
          <Route path='/lists/display'render={() => (this.props.currentUser === null)
            ? <Redirect to='/login' /> : <ListsCollection/>}/>
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

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
