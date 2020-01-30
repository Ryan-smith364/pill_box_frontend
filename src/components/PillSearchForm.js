import React from 'react';
import {Form, Input} from 'semantic-ui-react'

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
      </React.Fragment>
    )
  }
}