import React from 'react';
import {Form, Input} from 'semantic-ui-react'
import {onSearch} from '../actions/index'
import {connect} from 'react-redux'

class PillSearchForm extends React.Component{
  state = {
    search: ""
 }

 handleChange = e => {

    console.log(e.currentTarget.value)
    this.setState({ search: e.currentTarget.value.toLowerCase() })
  }

  render(){
    return (
      <React.Fragment>
        <Form onSubmit={() => this.props.onSearch(this.state.search)}> 
            <Input
              size='large' 
              icon='search'
               // label='Search'
              placeholder='Search'
              onChange={e => this.handleChange(e)}
            />
           
         </Form><br/>
         {/* Possibly add a form so that on submit I can filter search results */}

      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
   onSearch: (search) => {dispatch(onSearch(search))}
 })

export default connect(null, mapDispatchToProps)(PillSearchForm)