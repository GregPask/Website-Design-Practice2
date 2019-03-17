import React, { Component } from 'react';
import  {breakfast, Meals} from "../Js/data";


class Menu extends Component {
    state = { 
       breakfast: "",
       Meals: "",
       food: 1
     }

     componentWillMount(){
         this.setState({
            breakfast,
            Meals,
         })
     }

     chooseFood = (id) => {
         console.log(typeof id);
        this.setState({
            food: id
        })
     }

    render() { 
       
        let breakfast = this.state.breakfast.map((food) => {
            return (
                <div className="food">
                    <div className="food-left">
                     <img src={food.img} alt=""/>
                    </div>
                    
                    
                    <div className="food-right">
                        <p>{food.title}</p>
                        <p>{food.info}</p>
                        <p className="bold">Price: £{food.price}</p>
                    </div>
                </div>
            );
        })


        let Meals = this.state.Meals.map((food) => {
            return (
                <div className="food">
                    <div className="food-left">
                     <img src={food.img} alt=""/>
                    </div>
                    
                    
                    <div className="food-right">
                        <p>{food.title}</p>
                        <p>{food.info}</p>
                        <p className="bold">Price: £{food.price}</p>
                    </div>
                </div>
            );
        })



        return ( 
            <div id="menu">
                <h2  data-aos="fade-up" >Menu Section</h2>
               
                <div data-aos="fade-right" id="menu-choices">
                    <div>
                        <button onClick={this.chooseFood.bind(this,1)}  className={this.state.food === 1 ? "active-btn" : ""}>Breakfast</button>
                    </div>
                    <div>
                        <button  onClick={this.chooseFood.bind(this,2)}  className={this.state.food === 2 ? "active-btn" : ""}>Meals</button>
                    </div>
                    <div>
                        <button  onClick={this.chooseFood.bind(this,3)}  className={this.state.food === 3 ? "active-btn" : ""} >Snacks</button>
                    </div>
                    <div>
                        <button onClick={this.chooseFood.bind(this,4)}   className={this.state.food === 4 ? "active-btn" : ""} href="">Desserts</button>
                    </div>
                    <div>
                        <button onClick={this.chooseFood.bind(this,5)}  className={this.state.food === 5 ? "active-btn" : ""}  href="">Drinks</button>
                    </div>
                </div>


                <div className="container">
                <div id="food-wrap">
                {this.state.food === 1 ? breakfast : null}
                {this.state.food === 2 ? Meals : null}
                {this.state.food === 3 ? breakfast : null}
                {this.state.food === 4 ? Meals : null}
                {this.state.food === 5 ? breakfast : null}

               
                </div>
                </div>
               

            </div>
         );
    }
}
 
export default Menu;