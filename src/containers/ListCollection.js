import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import ListForm from '../components/ListForm';

class ListCollection extends React.Component{
  render(){
    console.log(this.props)
    return (
      <React.Fragment>
       
           { this.props.currentUser.pill_lists.length !== 0 ?   this.props.currentUser.pill_lists.map(list => <li>{list.name}</li> ) : null }  {/*<ListForm/> */}
        
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps)(ListCollection));