import React from 'react';
import PillCard from '../components/PillCard'
import { Container, Card, Segment } from 'semantic-ui-react';


export default  class PillCollection extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Container>
          { this.props.pills !== [] ?
          <Card.Group className="stackable" itemsPerRow={4}>
             {this.props.pills.map(pill => <PillCard pill={pill}/>)}
          </Card.Group> : <Segment><h1>No Pills Found</h1></Segment>}
        </Container>
      </React.Fragment>
    )
  }
}