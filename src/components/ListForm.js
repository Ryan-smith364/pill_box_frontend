import React from 'react';
import { Container, Input, Button, Card, Form } from 'semantic-ui-react';
// import PillCard from '../components/PillCard'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {postPillList} from '../actions/index'

class ListForm extends React.Component{
   state = {
      list: {
         name: null,
         desc: null,
         user_id: this.props.currentUser.id
      }
   }

   handleChange = e => {
      // debugger
      console.log(e.currentTarget.name)
      this.setState({ list: {
        ...this.state.list,
        [e.currentTarget.name]: e.currentTarget.value}
      })
    }

  render(){
    return (

    <React.Fragment>
        <Container>
         <Form onSubmit={() => this.props.postPillList(this.state.list)}>
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

          <Form> 
            <Form.Field
                  control={Input}
                  placeholder='Search'
                  onChange={null}>
            </Form.Field>
          </Form>   

          <Container>
          <Card.Group className="stackable" itemsPerRow={4}>
             {/* {this.props.searchPills.map(pill => <PillCard pill={pill}/>)} */}
          </Card.Group>
        </Container>

         

        </Container>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
   postPillList: (list) => {dispatch(postPillList(list))}
 })

 const mapStateToProps = (state) => {
   return {currentUser: state.currentUser}
 }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm))