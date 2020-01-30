import React from 'react';
import PillSearchForm from './PillSearchForm';
import PillCollection from '../containers/PillContainer'

export default  class PillSearch extends React.Component{
  render(){
    return (
      <React.Fragment>
         <PillSearchForm/>

         <PillCollection/>
      </React.Fragment>
    )
  }
}