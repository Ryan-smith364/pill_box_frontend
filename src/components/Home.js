import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends React.Component{
  render(){
    return (
      <React.Fragment>
            
      {this.props.currentUser ? <Link to='/new-pill-list'><Button content='New Pill Box' className="color"/></Link>: null}
         <Link to='/pills/search'><Button content='Search Drugs'/></Link>
      {this.props.currentUser ? <Link to='/lists/display'><Button content='Your Pill Box'/></Link>: null }
         {/* <Link to='/new-pill-list'><Button content='Reminders'/></Link> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
   return { currentUser: state.currentUser}
 }
 export default connect(mapStateToProps)(Home)
 