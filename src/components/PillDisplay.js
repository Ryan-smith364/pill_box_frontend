import React from 'react';
import {connect} from 'react-redux'
import { Container, Modal, Button, Grid, Segment } from 'semantic-ui-react';
import {addPill} from '../actions/index'
import {withRouter} from 'react-router-dom'
import ListForm from './ListForm';

class PillDisplay extends React.Component{

   findPill = () => {
      return this.props.pills.find(pill => pill.id.toString() === this.props.match.params.id)  
   }

  render(){

      console.log(this.props.match.params.id, this.props.pills)
      const pill = this.findPill()
      console.log(pill)
      // debugger
    return (

      <React.Fragment>
         <Container>
            <Grid>
               <Grid.Row stretched padded='vertically'>
                  <Grid.Column width={7} >
                     <Segment>
                     <h1>{pill.name}</h1>
                     <p>{pill.brand}</p>
                     <p>{pill.route}</p>
                     {this.props.currentUser ?  
                        <Modal trigger={<Button>Add To List</Button>}>
                        <Modal.Content >
                              { this.props.currentUser.pill_lists !== [] ?   this.props.currentUser.pill_lists.map(list =>
                                  <div>
                                     <p>{list.name}</p>
                                     {list.pills.find(find => find.id === pill.id) !== undefined ? <Button >Added</Button> : <Button onClick={() => this.props.addPill( list.id, pill )}>Add</Button>}
                                  </div>      
                              )
                                   : <ListForm/>
                                   } 
                           </Modal.Content>
                        </Modal>: null}
                     </Segment>
                     <Segment>
                     <p>{pill.purpose}</p>
                     <p>{pill.dose}</p>
                     <p>{pill.description}</p>
                     </Segment>
                  </Grid.Column>
                  <Grid.Column width={8} >
                     <Segment>
                        <p>{pill.package_label}</p>
                        <p>{pill.pregnancy}</p>
                     </Segment>
                     <Segment>
                        <p>{pill.warnings}</p>
                     </Segment>
                  </Grid.Column>
               </Grid.Row>
            </Grid>   
         </Container>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
   addPill: (listId, pillId) => {dispatch(addPill(listId, pillId))}
 })

const mapStateToProps = (state) => {
   return { pills: state.pills,
            currentUser: state.currentUser
   }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PillDisplay))