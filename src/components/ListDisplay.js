import React from 'react';
import {connect} from 'react-redux'
import { Container,  Grid, Segment, Button } from 'semantic-ui-react';
import  {withRouter, Link} from 'react-router-dom'
import {deletePillList} from '../actions/index'
import {deletePill} from '../actions/index'
// import ListCollection from '../containers/ListCollection';


class ListDisplay extends React.Component{
  findPillList = () => {
    return this.props.currentUser.pill_lists.find(pillList => pillList.id.toString() === this.props.match.params.id)  
 }

 delete = (list) => {
   this.props.history.push('/lists/display')
   this.props.deletePillList(list)
 }

 reminderDate = (time) => {
  let date = new Date(parseInt(time))
  return date.toString()
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
                <Grid.Column width={8} ><Segment>
                  <h2>{pillList.name}</h2>
                  <p>{pillList.desc}</p>
                  <p> Reminder time : { this.reminderDate(pillList.time) }</p>
                  </Segment></Grid.Column>
                <Grid.Column width={8} ><Segment style={{overflow: 'auto', maxHeight: 550 }}>
                  <nav>
                    <ul>
                      {pillList.pills.map(pill => <React.Fragment>  <li><Link to={`/pills/display/${pill.id}`}><Button>{pill.name}</Button></Link></li></React.Fragment>)}
                    </ul>
                  </nav> 
               </Segment></Grid.Column>
              </Grid.Row>
            </Grid>   
          </Container>


      <Button onClick={() => this.delete(pillList)}>Delete Pill Box</Button>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser
          }
}

const mapDispatchToProps = (dispatch) => {
  return{

  deletePillList: (list) => {dispatch(deletePillList(list))},
  deletePill: (pill) => {dispatch(deletePill(pill))}

  }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListDisplay))
