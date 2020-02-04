import React from 'react';
import {Link} from 'react-router-dom'
import { Segment, Card, Button } from 'semantic-ui-react';

export default  class PillCard extends React.Component{
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
         <Link to={`/pills/display/${this.props.pill.id}`}><Button content='More Info'/></Link>
      </Card>
    
  
           

       
         
    )
  }
}