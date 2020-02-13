import React from 'react'
import {Header, Button} from 'semantic-ui-react';
import { Menu, Modal, Image } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';
import {connect} from 'react-redux'
import {userLogout} from '../actions/index'
import EditUser from './EditUser'
import logo from '../img/Pillbox_TP.png'

 class Navbar extends React.Component{

   render(){
      console.log(this.props.history)
      return(
         <React.Fragment>
            <Header as='h2'>
      <Header.Content>
        <Link to='/' > <Image src={logo} size='medium' /></Link>
        <Header.Subheader >Never Miss A Pill Again</Header.Subheader>
      </Header.Content>

      <Menu>

      
         
     
      {this.props.history.location.pathname !== "/"  ?   this.props.currentUser ? <Menu.Menu>
            <Menu.Item><Link to='/new-pill-list'><Button content='New Pill Box' className="color"/></Link></Menu.Item>
            <Menu.Item> <Link to='/pills/search'><Button content='Search Pills'/></Link> </Menu.Item>
            <Menu.Item><Link to='/lists/display'><Button content='Your Pill Box'/></Link> </Menu.Item>
         </Menu.Menu>: null : null }

         {/* <Link to='/new-pill-list'><Button content='Reminders'/></Link> : null } */}


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
            <Button onClick={this.props.userLogout}>LogOut</Button>
          </Menu.Item>
         }

         {!this.props.currentUser ? 
            null :
            <Menu.Item>
               <Modal trigger={<Button>Edit User</Button>} closeIcon>
                  <Modal.Content >
                     <EditUser/>
                  </Modal.Content>
               </Modal>
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