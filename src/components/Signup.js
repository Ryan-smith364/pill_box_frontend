import React from 'react';
import { Button, Form, Input, Container} from 'semantic-ui-react'


export default  class Signup extends React.Component{

   newUser = (e) => {
      console.log(e.currentTarget.value)
   }

  render(){
    return (
         
      <React.Fragment>
        <Container>
         <Form onSubmit={(e) => this.newUser(e)}>
            <Form.Group widths='equal'>
               <Form.Field
                  control={Input}
                  label='Username'
                  placeholder='Username'
                  onChange={null}
                  required
               >
               </Form.Field>

               <Form.Field
                  control={Input}
                  type='password'
                  label='Password'
                  placeholder='Password'
                  onChange={null}
                  required
               >
               </Form.Field>

               <Form.Field
                  control={Input}
                  type='Confirm Password'
                  label='Password'
                  placeholder='Password'
                  onChange={null}
                  required
               >
               </Form.Field>

               <Form.Field
                  control={Input}
                  label='Name'
                  placeholder='First'
                  onChange={null}
                  required
               >
               </Form.Field>

               <Form.Field
                  control={Input}
                  label=''
                  placeholder='Last'
                  onChange={null}
                  // required
               >
               </Form.Field>

               <Form.Field
                  control={Input}
                  label='Email'
                  placeholder='Email'
                  onChange={null}
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
               <Form.Field
                  control={Button}
                  type='button'
                  onClick={null}
               >Cancel
               </Form.Field>
               
            </Form.Group>
         </Form>
        </Container>
      </React.Fragment>
         
    )
  }
}