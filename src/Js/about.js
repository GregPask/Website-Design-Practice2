import React, { Component } from 'react';


class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="about">
                <div id="about-content">
                    <h2 data-aos="fade-up">About Us</h2>
                </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-5">
                         <img data-aos="fade-up" className="about-img" src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                      </div>
                        <div className="col-lg-1"></div>
                      <div className="col-lg-6">
                         <p data-aos="fade-up">Join us in the Kings Waterfront area, slap bang in the centre of Liverpool’s entertainment district. We’re ideally placed for many attractions, including the Tate Liverpool, M&S Bank Arena and Albert Dock. Whether shopping or exploring, come and refuel with us - a warm welcome awaits. Join us in the Kings Waterfront area, slap bang in the centre of Liverpool’s entertainment district. We’re ideally placed for many attractions, including the Tate Liverpool, M&S Bank Arena and Albert Dock. Whether shopping or exploring, come and refuel with us - a warm welcome awaits.</p>
                      </div>
                  </div>
              </div>
            </div>
         );
    }
}
 
export default About;