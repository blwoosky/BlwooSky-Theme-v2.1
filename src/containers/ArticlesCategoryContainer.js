import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCategories} from "../actions";
import ArticlesCategory from "../components/ArticlesCategory";
import {browserHistory} from "react-router";


class ArticlesCategoryContainer extends Component {

    constructor(props) {

        super(props);
    }

    componentWillMount() {

        this.props.getCategories();

    }

    render() {
        return <ArticlesCategory {...this.props} {...this}/>
    }
}


/*
 * 1.映射store当中的数据到组件
 * 2.映射action方法到组件
 *
 * */

function mapStateToProps(store) {

    return {
        categories: store.categories.categories.data
    }
}

export default connect(mapStateToProps, {getCategories})(ArticlesCategoryContainer);