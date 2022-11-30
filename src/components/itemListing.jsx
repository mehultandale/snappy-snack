

import React from "react";


class ItemListing extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {
                    this.props.items.map((product, i) => {
                        return (
                            <li key={i} >{product.name}</li>
                        )
                    })
                }
            </ul>
        );
    }
}


export default ItemListing;