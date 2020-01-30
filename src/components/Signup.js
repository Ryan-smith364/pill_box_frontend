import React from 'react';
import { Button, Form, Input} from 'semantic-ui-react'


export default  class Signup extends React.Component{
  render(){
    return (
         
      <React.Fragment>
         <Form onSubmit={null}>
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
      </React.Fragment>
         
    )
  }
}