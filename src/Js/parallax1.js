import React, { Component } from 'react';


class Parallax1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div data-jarallax data-speed="0.5"  id="parallax1">
                <div id="overlay"></div>

                    <div className="container">
                        <div id="para-wrap">
                            <div data-aos="fade-up">
                                <h3>Fresh</h3>
                                <p>150 Fresh Courses</p>
                            </div>
                            <div data-aos="fade-up"> 
                                <h3>Hot</h3>
                                <p>Food served hot!</p>
                            </div>
                           
                        </div>
                    </div>

            </div>


            <div  id="parallax1small">
                <div id="overlay"></div>

                    <div className="container">
                        <div id="para-wrap">
                            <div data-aos="fade-up">
                                <h3>Fresh</h3>
                                <p>150 Fresh Courses</p>
                            </div>
                            <div data-aos="fade-up"> 
                                <h3>Hot</h3>
                                <p>Food served hot!</p>
                            </div>
                           
                        </div>
                    </div>

            </div>
            </div>
         );
    }
}
 
export default Parallax1;