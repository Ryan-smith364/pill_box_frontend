import React from 'react';
import {connect} from 'react-redux'
import PillSearchForm from './PillSearchForm';
import PillCollection from '../containers/PillCollection'
import PillCard from '../components/PillCard'
import { Container, Card } from 'semantic-ui-react';

class PillSearch extends React.Component{
  render(){
    return (
      <React.Fragment>
         <PillSearchForm/>
         
         <Container>
          <Card.Group className="stackable" itemsPerRow={4}>
             {this.props.pills.map(pill => <PillCard pill={pill}/>)}
          </Card.Group>
        </Container>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
   return { pills: state.pills}
}
export default connect(mapStateToProps)(PillSearch)