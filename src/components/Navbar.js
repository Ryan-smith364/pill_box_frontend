import React from 'react'
import {Header, Button} from 'semantic-ui-react';
import { Menu, Modal } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';
import {connect} from 'react-redux'
import {userLogout} from '../actions/index'


 class Navbar extends React.Component{

   render(){
      console.log(this.props)
      return(
         <React.Fragment>
            <Header as='h2'>
      <Header.Content>
        <Link to='/' > PillBox </Link>
        <Header.Subheader >Never Miss A Pill Again</Header.Subheader>
      </Header.Content>

      <Menu>

      <Menu.Item>
         
      </Menu.Item>

        <Menu.Menu position='right'>
          {!this.props.currentUser ? 
          <Menu.Item>
             <Modal trigger={<Button >Login</Button>} closeIcon>
                <Modal.Content>
                   <Login/>
                </Modal.Content>
             </Modal>
         </Menu.Item>:
         
          <Menu.Item>
            <Button onClick={this.props.userLogout}>Login Out</Button>
          </Menu.Item>
         }
         
          {!this.props.currentUser ? 
          <Menu.Item>
            
            <Modal trigger={<Button>SignUp</Button>} closeIcon>
              <Modal.Content >
                  <Signup/>
               </Modal.Content>
            </Modal>

            </Menu.Item>
           : null }
    
        </Menu.Menu>
      </Menu>

    </Header>
         </React.Fragment>
      )
   }

}
const mapStateToProps = (state) => {
   return { currentUser: state.currentUser}
 }

 const mapDispatchToProps = (dispatch) => ({
   userLogout: () => {dispatch(userLogout())}
 })

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));