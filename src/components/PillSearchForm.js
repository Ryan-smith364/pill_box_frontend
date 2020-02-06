import React from 'react';
import {Form, Input} from 'semantic-ui-react'
import {onSearch} from '../actions/index'
import {connect} from 'react-redux'

class PillSearchForm extends React.Component{

  render(){
    return (
      <React.Fragment>
        <Form> 
            <Form.Field
               control={Input}
               // label='Search'
               placeholder='Search'
               onChange={e => this.props.handleChange(e)}
            ></Form.Field>
            <Form.Field>

            </Form.Field>
         </Form>
         {/* Possibly add a form so that on submit I can filter search results */}

      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
   onSearch: (search) => {dispatch(onSearch(search))}
 })

export default connect(null, mapDispatchToProps)(PillSearchForm)