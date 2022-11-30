

import React from 'react';

import CategoryListing from './components/categoryListing';

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        document.title = "SnappySnack";
        this.state = {
            displayMainCategory: false,
            "categories": [
                {
                    "id": 1,
                    "name": "Snacks"
                },
                {
                    "id": 2,
                    "name": "Vegetables"
                },
                {
                    "id": 3,
                    "name": "Breakfast"
                }
            ],
            "products": [
                {
                    "name": "Pringles",
                    "category": 1
                },
                {
                    "name": "Tomato",
                    "category": 2
                },
                {
                    "name": "Sabudana khichdi",
                    "category": 3
                },
                {
                    "name": "Upma",
                    "category": 3
                },
                {
                    "name": "Pringles",
                    "category": 1
                },
                {
                    "name": "Tomato",
                    "category": 2
                },
                {
                    "name": "Sabudana khichdi",
                    "category": 3
                },
                {
                    "name": "Upma",
                    "category": 3
                }                
            ]
        };
        this.categoryButtonEntered = this.categoryButtonEntered.bind(this);
        this.categoryButtonLeft = this.categoryButtonLeft.bind(this);
    }
    categoryButtonEntered() {
        this.setState({
            "displayMainCategory": true
        });
    }
    categoryButtonLeft() {
        this.setState({
            "displayMainCategory": false
        });
    }
    render() {
        return (
            <div>
                <h1 className="logo" >
                    Snappy<span className="subhead" >Snack</span>
                </h1>
                <h4>Parel's own home delivery service!</h4>

                <div className="homeListing" >

                    <div 
                        className="categoryWrap"
                        onMouseEnter={this.categoryButtonEntered}
                        onMouseLeave={this.categoryButtonLeft} >
                        
                        <button className="categoryBtn" >Parel's Menu</button>

                        <div className="categoryCols" >
                            <CategoryListing  
                                toDisplay={this.state.displayMainCategory}
                                items={this.state.categories} />
                        </div>
                    </div>


                    <div className="productListing" >
                        {
                            this.state.products.map(function(singleProduct, key) {
                                return (
                                    <div key={key} className="singleProduct" >
                                        <img src="https://via.placeholder.com/300" />
                                        <h4>Prod 1</h4>
                                        <h5>Rs. 125</h5>
                                        <h5>Delivered in 10 minutes</h5>
                                        <button>Add to cart</button>
                                    </div>

                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default App;