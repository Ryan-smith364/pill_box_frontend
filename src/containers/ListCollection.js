import React from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import ListForm from '../components/ListForm';

// import ListForm from '../components/ListForm';

class ListCollection extends React.Component{
  render(){
    return (
      <React.Fragment>
          { this.props.currentUser.pill_lists.length !== 0 ?  <h1>Your Pill Boxes</h1> : <React.Fragment><h1>Your PillBox Is Empty Right Now</h1> <h3>Go Ahead And Make Your First PillBox</h3> </React.Fragment>}
          { this.props.currentUser.pill_lists.length !== 0 ?  this.props.currentUser.pill_lists.map(list => <Link to={`/lists/display/${list.id}`}><Button>{list.name}</Button></Link> ) : <ListForm/> }  {/*<ListForm/> */}
                                
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps)(ListCollection));