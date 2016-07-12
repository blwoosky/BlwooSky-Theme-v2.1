import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPosts,getCategories} from "../actions";
import Posts from "../components/Posts";
import {browserHistory} from "react-router";


class PostsContainer extends Component {

    constructor(props) {

        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.getCategoryParam = this.getCategoryParam.bind(this);
        this.getKeywordParam = this.getKeywordParam.bind(this);
        this.getPageParam = this.getPageParam.bind(this);

    }

    getPageParam() {
        let pageParam = parseInt(this.props.params.pageNum);
        return isNaN(pageParam) ? 1 : pageParam;
    }

    getCategoryParam() {

        let categorySlug = this.props.params.categorySlug;
        return typeof categorySlug == "undefined" ? "" : categorySlug;

    }

    getKeywordParam() {
        let keyWordParam = this.props.params.keyWord;
        return typeof keyWordParam == "undefined" ? "" : keyWordParam;
    }

    handlePageClick(selected) {

        let pageNow = selected.selected + 1;

        if (this.getCategoryParam()) {
            browserHistory.push(`/category/${this.getCategoryParam()}/${pageNow}`);
            return;
        }

        if (this.getKeywordParam()) {
            browserHistory.push(`/search/${this.getKeywordParam()}/${pageNow}`);
            return;
        }

        browserHistory.push(`/page/${pageNow}`);

    }

    componentWillReceiveProps(nextProps) {

        let prevPageNum = this.getPageParam(),
            nextPageNum = parseInt(nextProps.params.pageNum);
        nextPageNum = isNaN(nextPageNum) ? 1 : nextPageNum;

        let prevCategory = this.getCategoryParam(),
            nextCategory = nextProps.params.categorySlug;
        nextCategory = typeof nextCategory == "undefined" ? "" : nextCategory;

        let prevSearch = this.getKeywordParam(),
            nextSearch = nextProps.params.keyWord;
        nextSearch = typeof nextSearch == "undefined" ? "" : nextSearch;

        //console.log(prevPageNum, nextPageNum);
        //if (nextCategory) {
        //    this.props.getCategories();
        //}

        if (prevPageNum != nextPageNum ||
            prevCategory != nextCategory ||
            prevSearch != nextSearch) {
            this.props.getPosts({
                page: nextPageNum,
                category: nextCategory,
                search: nextSearch
            });
        }

    }


    componentWillMount() {

        let pageParam = this.getPageParam(),
            categoryParam = this.getCategoryParam(),
            keywordParam = this.getKeywordParam();

        if (keywordParam) {
            this.props.getPosts({
                page: pageParam,
                category: categoryParam,
                search: keywordParam
            });
        } else {
            this.props.getPosts({
                page: pageParam,
                category: categoryParam
            });
        }


        this.props.getCategories();

    }

    render() {
        return <Posts {...this.props} {...this}/>
    }
}


/*
 * 1.映射store当中的数据到组件
 * 2.映射action方法到组件
 *
 * */

function mapStateToProps(store) {
    return {
        postList: store.posts.postList.data,
        totalPages: store.posts.postList.totalPages,
        categories: store.categories.categories.data
    }
}

export default connect(mapStateToProps, {getPosts, getCategories})(PostsContainer);