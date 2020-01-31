import React from 'react';


export default  class ListCollection extends React.Component{
  render(){
    return (
      <React.Fragment>
         <ul>
            {this.props.lists.forEach(list => <li>{list.name}</li> ) }
         </ul>
      </React.Fragment>
    )
  }
}