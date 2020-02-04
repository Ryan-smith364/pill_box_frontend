import React from 'react';
import {Form, Input} from 'semantic-ui-react'
import {onsearch} from '../actions/index'

export default  class PillSearchForm extends React.Component{
  render(){
    return (
      <React.Fragment>
          <Form.Field
               control={Input}
               // label='Search'
               placeholder='Search'
               onChange={null}
            ></Form.Field>
            <Form.Field  
            ></Form.Field>
      
      </React.Fragment>
    )
  }
}