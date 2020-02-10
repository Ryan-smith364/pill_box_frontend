import React from 'react';
import {connect} from 'react-redux'
import { Container,  Grid, Segment, Button } from 'semantic-ui-react';
import  {withRouter, Link} from 'react-router-dom'
// import ListCollection from '../containers/ListCollection';


class ListDisplay extends React.Component{
  findPillList = () => {
    return this.props.currentUser.pill_lists.filter(pillList => pillList.id.toString() === this.props.match.params.id)  
 }

render(){
    // console.log(this.props.match.params.id, this.props.pillLists)
    console.log(this.props)
    const pillList = this.findPillList()
    return (
      <React.Fragment>
        <h1>Pill Box</h1>
          <Container>
            <Grid>
              <Grid.Row stretched padded='vertically'>
                <Grid.Column width={7} ><Segment>
                  <h2>{pillList[0].name}</h2>
                  <p>{pillList[0].desc}</p>
                  </Segment></Grid.Column>
                <Grid.Column width={8} ><Segment>
                  {pillList[0].pills.map(pill => <Link to={`/pills/display/${pill.id}`}><Button>{pill.name}</Button></Link>)}
                </Segment></Grid.Column>
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
export default withRouter(connect(mapStateToProps)(ListDisplay))
