import React from 'react';
import { Container, Input, Button, Card, Form, Modal } from 'semantic-ui-react';
import AddCard from '../components/AddCard'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {postPillList} from '../actions/index'

class ListForm extends React.Component{
   state = {
      list: {
         name: null,
         desc: null,
         user_id: this.props.currentUser.id,
         pills: []
      },
      search: '',
   

   }

   handleChange = e => {
      // debugger
      console.log(e.currentTarget.name)
      this.setState({ list: {
        ...this.state.list,
        [e.currentTarget.name]: e.currentTarget.value}
      })
    }

    addPill = (newPill) => {
     
       this.setState({ list: {
         ...this.state.list, 
         pills: [...this.state.list.pills, newPill] }
       })
    }

    removePill = (removedPill) => {
      let removedArr = this.state.list.pills.filter(pill => pill !== removedPill)
   
      this.setState({ list: {
         ...this.state.list, 
         pills: removedArr }
       })
    }

    handleSearch = e => {
      console.log(e.currentTarget.value)
      this.setState({ search: e.currentTarget.value.toLowerCase() })
    }

    makeBox = () => {
      this.props.postPillList(this.state.list)
      
      
    }

  render(){
    return (

    <React.Fragment>
        <Container>
         <Form onSubmit={() => this.makeBox()}>
            <Form.Group widths='equal'>
               <Form.Field
                  name="name"
                  control={Input}
                  label='Box Name'
                  placeholder='Name'
                  onChange={e => this.handleChange(e)}
                  required
               >
               </Form.Field>
               <Form.Field
                  name="desc"
                  control={Input}
                  label='Description'
                  placeholder='Desc.'
                  onChange={e => this.handleChange(e)}
                  
               >
               </Form.Field>

               </Form.Group>
               <Form.Group>
            
               <Form.Field
                  control={Button}
                  type='submit'
               >Create
               </Form.Field>
              
               
            </Form.Group>
         </Form>

         

            <Modal trigger={<Button >Add Pills</Button>}>
                <Modal.Content>
                  <Form onSubmit={null}> 
                     <Form.Field
                        control={Input}
                        placeholder='Search'
                        onChange={e => this.handleSearch(e)}>
                     </Form.Field>
                  </Form>  
                  <Container>
                     <Card.Group className="stackable" itemsPerRow={4}>
                        {this.props.pills.filter(pill => pill.name.toLowerCase().includes(this.state.search)).map(pill => <AddCard pill={pill} addPill={this.addPill} pills={this.state.list.pills} removePill={this.removePill}/>)}
                     </Card.Group>
                  </Container> 
                </Modal.Content>
             </Modal>

         

         

        </Container>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
   postPillList: (list) => {dispatch(postPillList(list))}
 })

 const mapStateToProps = (state) => {
   return {currentUser: state.currentUser,
           pills: state.pills
   }
 }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm))
