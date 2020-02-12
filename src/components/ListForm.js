import React from 'react';
import { Container, Input, Button, Card, Form, Modal, Segment, Label} from 'semantic-ui-react';
import AddCard from '../components/AddCard'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {postPillList, onSearch} from '../actions/index'
import PillModalDisplay from './PillModalDisp'
import TimePicker from 'react-time-picker';
// import {Field, reduxForm} from 'redux-form'
// import {TimePicker} from 'redux-form-material-ui';


class ListForm extends React.Component{
   state = {
      list: {
         name: null,
         desc: null,
         user_id: this.props.currentUser.id,
         frequency: 'as needed',
         freqNum: 0,
         pills: []
      },
      search: '',
      time:'12:00'

   }

   // change = e => {this.setState({list: { 
   //    ...this.state.list,
   //       frequency: e.currentTarget.innerText.toLocaleLowerCase() }
   //    })}

   // changeFreq = e => {this.setState({list: { 
   //    ...this.state.list,
   //    freqNum: e.currentTarget.value }
   //    })}
   
   onChange = time=> {this.setState({time})}

   
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

    makeBox = (e) => {
      e.currentTarget.reset()
      this.props.history.push('/lists/display')
      this.props.postPillList(this.state.list)
      this.setState({
         list: {
            name: null,
            desc: null,
            user_id: this.props.currentUser.id,
            // frequency: 'as needed',
            // freqNum: 0,
            pills: []
         }
      })
    }

    frequencyOptions = [
       {
         text: 'Weekly',
         value: 'weekly'
       },
       {
         text: 'Monthly',
         value: 'monthly'
       },
       {
         text: 'As Needed',
         value: 'as needed'
       }
    ]

  render(){
   
    return (

    <React.Fragment>
        <Container>
         <Form onSubmit={e => this.makeBox(e)}>
            <Form.Group widths='equal'>
               <Form.Field >
                  <Label style={{fontSize: '15px'}}> PillBox's Name</Label>
                  <Input
                  name="name"
                  control={Input}
                  placeholder='Name'
                  onChange={e => this.handleChange(e)}
                  required
                  ></Input>
               </Form.Field>
               <Form.Field>
                  <Label style={{fontSize: '15px'}}> Description</Label>
                  <Input name="desc"
                  control={Input}
                  placeholder='Desc.'
                  onChange={e => this.handleChange(e)}>
                  </Input>
               </Form.Field>
               </Form.Group>

              <Segment>
                  <h1>Schedule Reminder</h1>

                  <TimePicker
                     onChange={this.onChange}
                     value={this.state.time}
                  />

               </Segment>

               <Form.Group>
            

               <Form.Field
                  control={Button}
                  type='submit'
               >Create
               </Form.Field>
              
               
            </Form.Group>
         </Form>

      <Segment style={{overflow: 'auto', maxHeight: 550 }}>

            <Modal trigger={<Button >Add Pills</Button>} closeIcon>
                <Modal.Content>
                  <Form onSubmit={() => this.props.onSearch(this.state.search)}> 
                     <Input
                        size='large' 
                        icon='search'
                        placeholder='Search'
                        onChange={e => this.handleSearch(e)}
                        />
                  </Form>  <br/>
                  <Container>
                     <Card.Group className="stackable" itemsPerRow={4}>
                        {this.props.pills.map(pill => <AddCard pill={pill} addPill={this.addPill} pills={this.state.list.pills} removePill={this.removePill}/>)}
                     </Card.Group>
                  </Container> 
                </Modal.Content>
             </Modal>

      <h1>Pills:</h1>
      {this.state.list.pills ? this.state.list.pills.map(pill => <Segment><Modal trigger={<Button >{pill.name}</Button>} closeIcon>
               <PillModalDisplay pill={pill}/>
             </Modal><Button onClick={() => this.removePill(pill)}>X</Button> </Segment>) : null}

      </Segment>
        </Container>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => { return{
   postPillList: (list) => {dispatch(postPillList(list))},
   onSearch: (search) => {dispatch(onSearch(search))}
 }
}

 const mapStateToProps = (state) => {
   return {currentUser: state.currentUser,
           pills: state.pills
   }
 }



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm))