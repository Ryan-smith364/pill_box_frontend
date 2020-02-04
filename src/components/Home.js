import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default  class Home extends React.Component{
  render(){
    return (
      <React.Fragment>
         
         <Link to='/new-pill-list'><Button content='New Pill Box'/></Link>
         <Link to='/pills/search'><Button content='Search Drugs'/></Link>
         <Link to='/lists/display'><Button content='Your Pill Box'/></Link>
         {/* <Link to='/new-pill-list'><Button content='Reminders'/></Link> */}
      </React.Fragment>
    )
  }
}