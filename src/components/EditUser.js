import React from 'react';
import { Button, Form, Input, Container} from 'semantic-ui-react'
import {editUser} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import PillSearch from './PillSearch';

class EditUser extends React.Component{

   state = {
      newUser:{
         first_name: this.props.currentUser.first_name,
         last_name: this.props.currentUser.last_name,
         username: this.props.currentUser.username,
         password: null,
         email: this.props.currentUser.email,
      }
   }

   handleChange = e => {
      // debugger
      console.log(e.currentTarget.name)
      this.setState({ newUser: {
        ...this.state.newUser,
        [e.currentTarget.name]: e.currentTarget.value}
      })
    }

    sumbit = () => {
      this.props.history.push('/')
      this.props.editUser(this.state.newUser, this.props.currentUser.id)
    }
  

  render(){
     console.log(this.props)
    return (
         
      <React.Fragment>
        <Container>
         <Form onSubmit={() => this.sumbit()}>
            <Form.Group widths='equal'>
               <Form.Field
                  control={Input}
                  name='username'
                  label='Username'
                  placeholder='Username'
                  onChange={e => this.handleChange(e)}
                  required
                  value={this.state.newUser.username}
               >
               </Form.Field>

               <Form.Field
                  name='email'
                  control={Input}
                  label='Email'
                  placeholder='Email'
                  onChange={e => this.handleChange(e)}
                  value={this.state.newUser.email}
                  
               >
               </Form.Field>

            </Form.Group>

            <Form.Group>
               <Form.Field
                  name='first_name'
                  control={Input}
                  label='First Name'
                  placeholder='First'
                  onChange={e => this.handleChange(e)}
                   required
                   value={this.state.newUser.first_name}
               >
               </Form.Field>

               <Form.Field
                  control={Input}
                  name='last_name'
                  label='Last Name'
                  placeholder='Last'
                  onChange={e => this.handleChange(e)}
                  value={this.state.newUser.last_name}
                  
               >
               </Form.Field>
            </Form.Group>

            <Form.Group>
               <Form.Field
                  control={Input}
                  name='password'
                  type='password'
                  label='Password'
                  placeholder='Password'
                  onChange={e => this.handleChange(e)}
                  required
               >
               </Form.Field>

            </Form.Group>
          
            <Form.Group>
            
               <Form.Field
                  control={Button}
                  type='submit'
               >Submit
               </Form.Field>
           
            </Form.Group>
         </Form>
        </Container>
      </React.Fragment>
         
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
   editUser: (user, id) => {dispatch(editUser(user, id))}
 })

 const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUser))