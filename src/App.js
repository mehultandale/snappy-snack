

import React from 'react';

import ItemListing from './components/itemListing';

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        document.title = "SnappySnack";
        this.state = {
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
                    "name": "Sabudana khichdi",
                    "category": 3
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>SnappySnack</h1>
                <h4>Parel's own home delivery service!</h4>
                <ItemListing items={this.state.categories} />
                <ItemListing items={this.state.products} />
            </div>
        );
    }
}


export default App;