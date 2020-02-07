import React from 'react';
import {connect} from 'react-redux'
import PillSearchForm from './PillSearchForm';
// import PillCollection from '../containers/PillCollection'
import PillCard from '../components/PillCard'
import { Container, Card, Segment } from 'semantic-ui-react';

class PillSearch extends React.Component{
   state = {
      search: ""
   }

   handleChange = e => {
      console.log(this.props.pills.filter(pill => pill.name.toLowerCase().includes(this.state.search)))
      console.log(e.currentTarget.value)
      this.setState({ search: e.currentTarget.value.toLowerCase() })
    }

  render(){
    return (
      <React.Fragment>
         <PillSearchForm handleChange={this.handleChange}/>
         
         {this.props.pills.filter(pill => pill.name.toLowerCase().includes(this.state.search)) !== [] ?
         <Container>
          <Card.Group className="stackable" itemsPerRow={4}>
             {this.props.pills.filter(pill => pill.name.toLowerCase().includes(this.state.search)).map(pill => <PillCard pill={pill}/>)}
          </Card.Group></Container>:
          <Container><Segment><h1>No Pills Found</h1></Segment></Container> }
        
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
   return { pills: state.pills}
}
export default connect(mapStateToProps)(PillSearch)