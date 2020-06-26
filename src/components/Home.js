import React from 'react';
import { Button, Segment, Container, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import QR from '../img/QR.png'


class Home extends React.Component{
  
  render(){

    return (
      <React.Fragment>
            
      {this.props.currentUser ? <Link to='/new-pill-list'><Button content='New Pill Box' className="color"/></Link>: null}
         <Link to='/pills/search'><Button content='Search Pills'/></Link>
      {this.props.currentUser ? <Link to='/lists/display'><Button content='Your Pill Box'/></Link>: null }
      {this.props.currentUser ?   <Link to='/reminders'><Button content='Reminders'/></Link> : null}

         
        <Segment class="home_container">
          <Container text >
            <Header  as="h3">Our Background</Header>
            <p class="home_container" > 
              Pill Box is a multi puropse tool for assiting you for your medication needs. Rather it's for
               setting reminders to take your pills, or just checking information on the pills you take.
                PillBox uses all FDA provided information, so you know what we provide correct information 
                for our users.
            </p>
          </Container>
        </Segment>
      <Segment><h5 class="home_container" >Developer Info</h5></Segment>
      <Image src={QR} size='small' centered/>

      </React.Fragment>



    )
  }
}

const mapStateToProps = (state) => {
   return { currentUser: state.currentUser}
 }
 export default connect(mapStateToProps)(Home)
 