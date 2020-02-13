import React from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button, Segment, Grid, Container} from 'semantic-ui-react'
import ListForm from '../components/ListForm';

// import ListForm from '../components/ListForm';

class ListCollection extends React.Component{
  render(){
    return (
      <React.Fragment>
          { this.props.currentUser.pill_lists.length !== 0 ?  <Segment><h1>Your Pill Boxes</h1></Segment> : <Segment><h1>Your PillBox Is Empty Right Now</h1> <h3>Go Ahead And Make Your First PillBox</h3> </Segment>}

          { this.props.currentUser.pill_lists.length !== 0 ?
        
          <Container>
            <Grid textAlign='center'> 
              <Grid.Row padded='vertically' textAlign="center">
                <Grid.Column width={7} textAlign="center" >
                  <Segment style={{overflow: 'auto', maxHeight: 450 }}>
                    <ul>
      { this.props.currentUser.pill_lists.map(list => <li><Link to={`/lists/display/${list.id}`}><Button>{list.name}</Button></Link></li> ) }
                    </ul>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          : <ListForm/> }
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps)(ListCollection));