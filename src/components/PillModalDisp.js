import React from 'react';
import {connect} from 'react-redux'
import { Container,Grid, Segment } from 'semantic-ui-react';
import {addPill} from '../actions/index'
import {withRouter} from 'react-router-dom'


class PillModalDisp extends React.Component{

  render(){
    return (

      <React.Fragment>
         <Container>
            <Grid>
               <Grid.Row stretched padded='vertically'>
                  <Grid.Column width={7} >
                     <Segment>
                     <h1>{this.props.pill.name}</h1>
                     <p>{this.props.pill.brand}</p>
                     <p>{this.props.pill.route}</p>
                     
                     </Segment>
                     <Segment>
                     <p>{this.props.pill.purpose}</p>
                     <p>{this.props.pill.dose}</p>
                     <p>{this.props.pill.description}</p>
                     </Segment>
                  </Grid.Column>
                  <Grid.Column width={8} >
                     <Segment>
                        <p>{this.props.pill.package_label}</p>
                        <p>{this.props.pill.pregnancy}</p>
                     </Segment>
                     <Segment>
                        <p>{this.props.pill.warnings}</p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PillModalDisp))