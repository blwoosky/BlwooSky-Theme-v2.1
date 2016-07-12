import React, { Component } from 'react';
import { connect } from "react-redux";
import { getComments } from "./../actions";
import { Link,browserHistory } from 'react-router';
import Comments from './../components/Comments';


class CommentsContainer extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
        this.getPageParam = this.getPageParam.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.setActiveReply = this.setActiveReply.bind(this);

        this.initPage = true;
        this.state = {
            activeReply: -1
        };
        //this.getChildComment = this.getChildComment.bind(this);

    }


    setActiveReply(id) {
        this.setState({
            activeReply: id
        });
    }

    componentWillReceiveProps(nextProps) {

        //console.log(nextProps.mainLoadingStatus);
        let { postID : prevPostID } = this.props,
            { postID : nextPostID } = nextProps;

        let prevPageNum = this.getPageParam(),
            nextPageNum = parseInt(nextProps.params.pageNum);
        nextPageNum = isNaN(nextPageNum) ? 1 : nextPageNum;

        //console.log(prevPostID, nextPostID);
        //console.log(prevPageNum, nextPageNum);


        //console.log(nextPageNum);
        if (nextPostID != prevPostID) {
            this.initPage = true;
        }

        if (nextPostID != -1 && (prevPageNum != nextPageNum || prevPageNum == nextPageNum && this.initPage)) {
            //console.log(postID,nextPageNum,prevPageNum);

            this.initPage = false;

            this.props.getComments({
                post: nextPostID,
                page: nextPageNum
            });


        }
    }

    getPageParam() {

        //console.log(this.props);
        //console.log(this.props);
        let pageParam = parseInt(this.props.params.pageNum);
        return isNaN(pageParam) ? 1 : pageParam;

    }

    handlePageClick(selected) {

        let pageNow = selected.selected + 1;

        browserHistory.push(`/${this.props.params.slug}/comments/${pageNow}`);

    }

    render() {
        return (
            <Comments {...this.props} {...this} {...this.state}/>
        )
    }


}


function mapStateToProps(store) {
    //console.log(store.comments);

    return {
        comments: store.comments.allComments.data,
        totalPages: store.comments.allComments.totalPages,
        newComments: store.comments.newComments.data
    };

}

export default connect(mapStateToProps, {getComments})(CommentsContainer);


