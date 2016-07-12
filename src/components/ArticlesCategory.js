import React, { Component } from 'react';
import { Link } from "react-router";

export default class ArticlesCategory extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let _this = this;
        let {categories} = this.props;

        return (
            <div className="main_content archives">
                <div className="line_paper mb20 shadow sticker p20">
                    <h2>文章分类：</h2>
                    <ul>
                        {
                            categories.map(function (cat) {
                                return <li className="cat-item" key={cat.id}>
                                    <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }


}

