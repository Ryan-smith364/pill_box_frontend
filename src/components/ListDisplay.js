import React from 'react';
import ListCollection from '../containers/ListCollection';


export default  class ListDisplay extends React.Component{
  render(){
    return (
      <React.Fragment>
         <h1>Your Pills</h1>

         <ListCollection/>
      </React.Fragment>
    )
  }
}