import React from 'react'
import {Header, Button} from 'semantic-ui-react';
import { Menu, Modal } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';

export default class Navbar extends React.Component{

   render(){
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
          {this.props.user === null ? <Menu.Item>
            <Link onClick={this.props.handleLogOut}>Login Out</Link>
          </Menu.Item>:
          <Menu.Item>

             <Modal trigger={<Button>Login</Button>}>
                <Modal.Content>
                   <Login/>
                </Modal.Content>
             </Modal>
           
          </Menu.Item>  }
          {this.props.user !== null ? 
          <Menu.Item>
            
            <Modal trigger={<Button>SignUp</Button>}>
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
