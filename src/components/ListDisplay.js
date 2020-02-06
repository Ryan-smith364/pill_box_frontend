import React from 'react';
import {connect} from 'react-redux'
import { Container, Modal, Button, Grid, Segment } from 'semantic-ui-react';
// import ListCollection from '../containers/ListCollection';


class ListDisplay extends React.Component{
  findPillList = () => {
    return this.props.currentUser.pill_lists.filter(pillList => pillList.id.toString() === this.props.match.params.id)  
 }

render(){
    // console.log(this.props.match.params.id, this.props.pillLists)
    const pillList = this.findPillList()
    console.log(pillList[0])
    return (
      <React.Fragment>
        <h1>Pill Box</h1>
          <Container>
            <Grid>
              <Grid.Row stretched padded='vertically'>
                <Grid.Column width={7} >
                  <h2>{pillList[0].name}</h2>
                  <p>{pillList[0].desc}</p>
                </Grid.Column>
                <Grid.Column width={8} >
                  {pillList[0].pills.map(pill => <li>{pill.name}</li>)}
                </Grid.Column>
              </Grid.Row>
            </Grid>   
          </Container>


      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}
export default connect(mapStateToProps)(ListDisplay)
