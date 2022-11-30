

import React from "react";


class CategoryListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "products": [
                {
                    "name": "Pringles",
                    "category": 1
                },
                {
                    "name": "Sabudana khichdi",
                    "category": 3
                }
            ],
            "filteredProducts": []
        };
        this.categoryItemEntered = this.categoryItemEntered.bind(this);
    }
    categoryItemEntered(product) {
        console.log("category entered", product);
        let filteredArr = this.state.products.filter((singleProduct) => {
            if(product.id === singleProduct.category) {
                return singleProduct;
            }
        });
        this.setState({
            "filteredProducts": filteredArr
        });
    }
    categoryItemLeft() {
        console.log("category left");
    }
    render() {
        return (
            <div className="d-in-flx" >
                <ul 
                    className={`itemListing ${(this.props.toDisplay === false) ? "d-none" : ""}`} >
                    {
                        this.props.items.map((product, i) => {
                            return (
                                <li 
                                    key={i} 
                                    onMouseEnter={() => this.categoryItemEntered(product)} 
                                    onMouseLeave={this.categoryItemLeft}
                                    >
                                    {product.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className={`itemListing ${(this.props.toDisplay === false) ? "d-none" : ""}`} >
                    {
                        this.state.filteredProducts.map((product, i) => {
                            return (
                                <li key={i} >{product.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default CategoryListing;