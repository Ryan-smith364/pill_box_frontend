import React from 'react';


export default  class PillCard extends React.Component{
  render(){
    return (
      <div class="ui card">
         <div class="content">

            <div class="header">
               {this.props.pill.name}
            </div>
            <div class="meta">
               {this.props.pill.brand}
            </div>
            <div class="description">
               {this.props.pill.purpose}
            </div>

         </div>
      </div>
         
    )
  }
}