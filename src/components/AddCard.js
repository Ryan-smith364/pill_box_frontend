import React from 'react';
import {Link} from 'react-router-dom'
import { Segment, Card, Button } from 'semantic-ui-react';

export default  class AddCard extends React.Component{
  render(){
     console.log(this.props.pill)
    return (
      <Card
     
     >   
      <h3>{this.props.pill.name}</h3>
      {this.props.pill.brand}
         <Segment style={{overflow: 'auto', maxHeight: 200 }}>
            {this.props.pill.purpose}
         </Segment>
         { !this.props.pills.includes(this.props.pill) ? <Button content='Add' onClick={() => this.props.addPill(this.props.pill)}/>: <Button onClick={() => this.props.removePill(this.props.pill)}>Added</Button>}
      </Card>  
         
    )
  }
}