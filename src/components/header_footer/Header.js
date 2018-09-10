import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer'

class Header extends Component {

    state={
        open : false,
        headerColor : false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll')
    }

    handleScroll =() =>{
        if(window.scrollY >0 ){
           this.setState({
            headerColor : true
           })
        }else{
             this.setState({
                headerColor: false
             })
        }
        console.log('scroll')
    }
    toogleSideDrawer =(value) =>{
        this.setState({
            open : value
        })
    }
  render() {
    return (
      <AppBar position="fixed"
         style={{
            backgroundColor :this.state.headerColor ? '#2f2f2f' :'transparent',
            boxShadow :'none',
            padding : '10px 0px'
         }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
          color='inherit'
          onClick={()=>this.toogleSideDrawer(true)}
          >
           <MenuIcon />
          </IconButton>
          <SideDrawer anchor="right"
                 open={this.state.open}
                 onClose={(value) => this.toogleSideDrawer(value)} />

        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
