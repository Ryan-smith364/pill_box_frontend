import React from 'react';
import {connect} from 'react-redux'
import { Container, Modal, Button, Grid } from 'semantic-ui-react';
import {addPill} from '../actions/index'

class PillDisplay extends React.Component{

   findPill = () => {
      return this.props.pills.filter(pill => pill.id.toString() === this.props.match.params.id)  
   }

  render(){

      console.log(this.props.match.params.id, this.props.pills)
      const pill = this.findPill()
      console.log(pill[0])
    return (

      <React.Fragment>
         <Container>
            <Grid>
               <Grid.Row stretched>
                  <Grid.Column width={8} className="colomn">
                     <h1>{pill[0].name}</h1>
                     <p>{pill[0].brand}</p>
                     <p>{pill[0].route}</p>
                     {this.props.currentUser ?  
                        <Modal trigger={<Button>Add To List</Button>}>
                        <Modal.Content >
                              { this.props.currentUser ?   this.props.currentUser.pill_lists.map(list => 
                                  <div>
                                     <Button onClick={() => this.props.addPill( list.id, pill[0].id )}>Add</Button>
                                     <p>{list.name}</p>
                                  </div> 
                                  )
                                   : null 
                                   } 
                           </Modal.Content>
                        </Modal>: null}
                     <p>{pill[0].purpose}</p>
                     <p>{pill[0].dose}</p>
                     <p>{pill[0].description}</p>
                  </Grid.Column>
                  <Grid.Column width={8} className="colomn">
                     {/* <Grid.Segment> */}
                        <p>{pill[0].package_label}</p>
                        <p>{pill[0].pregnancy}</p>
                     {/* </Grid.Segment> */}
                     {/* <Grid.Segment> */}
                        <p>{pill[0].warnings}</p>
                     {/* </Grid.Segment> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(PillDisplay)