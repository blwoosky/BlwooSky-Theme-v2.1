import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPost} from "../actions";
import Post from "../components/Post";
import {browserHistory} from "react-router";


class PostContainer extends Component {

    constructor(props) {

        super(props);
    }

    componentWillMount() {
        //console.log("别墅槈");
        this.props.getPost(this.props.params.slug);
    }

    render() {
        return <Post {...this.props} {...this}/>
    }
}


/*
 * 1.映射store当中的数据到组件
 * 2.映射action方法到组件
 *
 * */

function mapStateToProps(store) {

    return {
        post: store.posts.post.data
    }
}

export default connect(mapStateToProps, {getPost})(PostContainer);