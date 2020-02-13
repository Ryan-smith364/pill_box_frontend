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
         pills: [],
      },
      search: '',
      check: false,
      time: "1:00",
      hour: '1',
      minute: '00'

   }

   showClock = () => {
      if(this.state.check){
         this.setState({check: false})
      }
      else{
         this.setState({check: true})
      }
   }

   
   
   onChange = e => { const timeArr = e.split(':')
   this.setState({
      time: e
   })
      console.log(timeArr)

      this.setState({
         hour: timeArr[0]
      })

      this.setState({
         minute: timeArr[1]
      })

   
}

   
   handleChange = e => {
   
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
      this.setState({ search: e.currentTarget.value.toLowerCase() })
    }

    makeBox = (e) => {
      e.currentTarget.reset()
      const date = new Date()
      date.setHours(this.state.hour)
      date.setMinutes(this.state.minute)
      date.setDate(date.getDate() + 1)
      console.log(date.getTime())
      
      this.props.history.push('/lists/display')
      this.props.postPillList(this.state.list, date.getTime())
      this.setState({
         list: {
            name: null,
            desc: null,
            user_id: this.props.currentUser.id,
            pills: []
         },
         hours: '1',
         minutes: '00',
         time:'1:00'
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
               <Button onClick={() => this.showClock()} type="button" > Set Reminder? </Button>
                  {this.state.check ? <TimePicker
                     onChange={e => this.onChange(e)}
                     value={this.state.time}
                  />: null}

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
   postPillList: (list, time) => {dispatch(postPillList(list, time))},
   onSearch: (search) => {dispatch(onSearch(search))}
 }
}

 const mapStateToProps = (state) => {
   return {currentUser: state.currentUser,
           pills: state.pills
   }
 }



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm))