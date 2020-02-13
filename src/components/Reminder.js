import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import {connect} from 'react-redux'
import {nextDay} from '../actions/index'


class Reminder extends React.Component{

  
  state = {
    reminders: []
  }

 checkReminders = () => {
    if(this.props.currentUser){
      this.props.currentUser.pill_lists.forEach(list => {
        const date = new Date(parseInt(list.time))
        console.log("here")
        if( date < new Date() ){
          console.log('here2')
          this.setState({reminders: [...this.state.reminders, list]})
          
        }

      });
    }
  }

  takePill = ( removed ) =>{
    this.setState({reminders: this.state.reminders.filter(list => list !== removed)})
    this.props.nextDay(removed)
    console.log(removed.id)
  }

  render(){
    
    return (
      <React.Fragment>
        <Button onClick={() => this.checkReminders()}>Check Reminders</Button>
          {this.state.reminders.length > 0 ? this.state.reminders.map(list => <Segment><h1>{list.name}</h1><Button onClick={() => this.takePill(list)}>Take</Button></Segment>): <Segment><h1>No Reminders Currently</h1></Segment>}
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  nextDay: (list) => {dispatch(nextDay(list))}
})

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}
export default connect(mapStateToProps, mapDispatchToProps)(Reminder)