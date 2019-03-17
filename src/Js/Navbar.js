import React, { Component } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Navbar extends Component {
    state = { 
        navbar: false
     }

     toggleSidebar = () => {
         this.props.sidebar();

         this.setState({
             navbar: !this.state.navbar
         })
     }


     
   
     

    render() { 
        return ( 
            <div id="navbar">
               
               <div id="navbar-left">
               
                </div>
                <div id="navbar-right">
                <Link className="nav-links" duration={1000} smooth={true} to="hero">HOME</Link>
                   <Link className="nav-links" duration={1000} smooth={true} to="about">ABOUT US</Link>
                   <Link className="nav-links" duration={1000} smooth={true} to="menu">MENU</Link>
                   <Link className="nav-links" duration={1000} smooth={true} to="contact">TEAM</Link>
                   <Link className="nav-links" duration={1000} smooth={true} to="footer">Contact</Link>
                </div>
              

                <div onClick={this.toggleSidebar} className={this.props.sidebarStatus ? "cross": ""} id="navbar-btn">
                    <div id="navbar-btn-1"></div>
                    <div id="navbar-btn-2"></div>
                    <div id="navbar-btn-3"></div>
                </div>

            </div>
         );
    }
}
 
export default Navbar;