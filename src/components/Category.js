import React, { Component } from 'react';
import {Link} from "react-router";

export default class Category extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _this = this;

        return (
            <span>
                {
                    this.props.categories.map(function (cat) {
                        return <Link to={`/category/${cat.slug}`} key={cat.cat_ID}>{cat.name}</Link>
                    })
                }
            </span>
        );


    }
}