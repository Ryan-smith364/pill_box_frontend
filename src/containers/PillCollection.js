import React from 'react';
import PillCard from '../components/PillCard'
import { Container, Card } from 'semantic-ui-react';


export default  class PillCollection extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Container>
          <Card.Group>
             {this.props.pills.map(pill => <PillCard pill={pill}/>)}
          </Card.Group>
        </Container>
      </React.Fragment>
    )
  }
}