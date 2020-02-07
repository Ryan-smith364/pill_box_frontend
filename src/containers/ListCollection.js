import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'

// import ListForm from '../components/ListForm';

class ListCollection extends React.Component{
  render(){
    return (
      <React.Fragment>
       
           { this.props.currentUser.pill_lists.length !== 0 ?   this.props.currentUser.pill_lists.map(list => <Link to={`/lists/display/${list.id}`}><Button>{list.name}</Button></Link> ) : null }  {/*<ListForm/> */}
                                
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps)(ListCollection));