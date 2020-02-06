import React from 'react';
import {connect} from 'react-redux'
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

        <h2>{pillList[0].name}</h2>
        <p>{pillList[0].desc}</p>
        {pillList[0].pills.map(pill => <li>{pill.name}</li>)}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}
export default connect(mapStateToProps)(ListDisplay)
