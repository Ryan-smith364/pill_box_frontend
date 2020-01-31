import React from 'react'
import {Header} from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
          </Menu.Item>:<Menu.Item>
            <Link to='/login'>Login</Link>
          </Menu.Item>  }
          {this.props.user !== null ? 
          <Menu.Item>
            
            <Link to='/signup'>SignUp</Link>
            </Menu.Item>
           : null }
    
        </Menu.Menu>
      </Menu>

    </Header>
         </React.Fragment>
      )
   }

}
