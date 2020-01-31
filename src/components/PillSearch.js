import React from 'react';
import PillSearchForm from './PillSearchForm';
import PillCollection from '../containers/PillCollection'

export default  class PillSearch extends React.Component{
  render(){
    return (
      <React.Fragment>
         <PillSearchForm/>
         
         <PillCollection pills={this.props.pills}/>
      </React.Fragment>
    )
  }
}