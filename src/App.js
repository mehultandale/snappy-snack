

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
                </div>
            </div>
        );
    }
}


export default App;