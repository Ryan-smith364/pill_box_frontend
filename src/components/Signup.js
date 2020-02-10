import React from 'react';
import { Button, Form, Input, Container} from 'semantic-ui-react'
import {createUser} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Signup extends React.Component{

   state = {
      newUser:{
         first_name: null,
         last_name: null,
         username: null,
         password: null,
         email: null
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

    signUp = () => {
      this.props.history.push('/')
      this.props.createUser(this.state.newUser)
    }
  

  render(){
     console.log(this.props)
    return (
         
      <React.Fragment>
        <Container>
         <Form onSubmit={() => this.signUp()}>
            <Form.Group widths='equal'>
               <Form.Field
                  control={Input}
                  name='username'
                  label='Username'
                  placeholder='Username'
                  onChange={e => this.handleChange(e)}
                  required
               >
               </Form.Field>

               <Form.Field
                  name='email'
                  control={Input}
                  label='Email'
                  placeholder='Email'
                  onChange={e => this.handleChange(e)}
                  
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
               >
               </Form.Field>

               <Form.Field
                  control={Input}
                  name='last_name'
                  label='Last Name'
                  placeholder='Last'
                  onChange={e => this.handleChange(e)}
                  
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

               <Form.Field
                  control={Input}
                  type='password'
                  label='Confirm Password'
                  placeholder='Password'
                  // onChange={() => e => this.handleChange(e)}
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
   createUser: (newUser) => {dispatch(createUser(newUser))}
 })
 
 export default withRouter(connect(null, mapDispatchToProps)(Signup));
 