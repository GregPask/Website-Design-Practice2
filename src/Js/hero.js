import React, { Component } from 'react';


class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="hero">
                <div id="hero-left">
                    <div id="overlay2"></div>
                    <h1>Welcome to Pasky's</h1>
                    <p>Here we can see a fresh range of food for all our products. Wow this is really cool!</p>
                    <a href="" >Book Table</a>
                </div>
                <div id="hero-right">
                    <div id="overlay"></div>
                <div id="carouselId" className="carousel slide" data-interval="2900" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div id="hero-img-1" className="carousel-item active">
                           
                        </div>
                        <div id="hero-img-2" className="carousel-item">
                           
                        </div>
                        <div id="hero-img-3" className="carousel-item">
                            
                        </div>
                    </div>
                </div>



                </div>











            </div> 
          
         );
    }
}
 
export default Hero;


