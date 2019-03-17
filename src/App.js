import React, { Component } from 'react';


import "./Css/app.scss";

import Navbar from "./Js/Navbar";
import Hero from "./Js/hero";
import About from "./Js/about";
import Parallax1 from "./Js/parallax1";
import Menu from "./Js/menu";
import Contact from "./Js/contact";
import Footer from "./Js/footer";



import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
class App extends Component {

  state = { 
    sidebar: false
   }


   toggleSidebar = () => {
     this.setState({
       sidebar: !this.state.sidebar
     })
     console.log("Toggleing");
   }


   checkWindow(){
     if(window.innerWidth > 992){
       this.setState({
         sidebar: false
       })
     }
   }


   componentWillMount(){
     setInterval(() => {
        this.checkWindow();
     },100);
   }


  render() { 



    return ( 
      <div id="app">
        <Navbar sidebarStatus={this.state.sidebar} sidebar= {this.toggleSidebar} />  
        <Hero />

        <div className={this.state.sidebar ? "show" : ""} id="sidebar">
                   <a href="/">HOME</a>
                   <Link className="nav-links" duration={1000} smooth={true} to="about">ABOUT US</Link>
                   <Link className="nav-links" duration={1000} smooth={true} to="menu">MENU</Link>
                    <a href="/">TEAM</a>
                    <a href="/">CONTACT</a>
        </div>
     
        <About />
        <Parallax1 />
        <Menu />
        <Contact />
        <Footer />     
      </div>
     );
  }
}
 
export default App;

