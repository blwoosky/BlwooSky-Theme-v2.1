import React, { Component } from 'react';
import { Link,browserHistory } from 'react-router';
import ReactPaginate from 'react-paginate';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";


export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.getComment = this.getComment.bind(this);
    }


    getComment(comment, comments, canReply) {
        //console.log(comment);

        return (
            <CommentItem key={comment.id}
                         comment={comment}
                         canReply={canReply}
                         comments={comments} {...this} {...this.props}/>
        )

    }


    render() {

        let {comments,newComments,activeReply,totalPages,commentStatus} = this.props,
            _this = this;
        let pageParam = this.props.getPageParam();
        pageParam = pageParam == null ? 1 : pageParam;

        return (

            <div className="commentsWrap">
                <ul>


                    {comments.map(function (comment) {
                        //console.log(comment);
                        if (comment.parent == 0) {
                            return _this.getComment(comment, comments, commentStatus == "open");
                        }
                    })}

                    <ReactCSSTransitionGroup transitionName="scale" transitionEnterTimeout={500}
                                             transitionLeaveTimeout={300}>

                        {newComments.map(function (comment) {
                            //console.log(comment);
                            if (comment.parent == 0) {
                                return _this.getComment(comment, comments, false);
                            }
                        })}
                    </ReactCSSTransitionGroup>


                    {(()=> {
                        if (totalPages > 1) {
                            return (
                                <div className="mt30 tac mb10">

                                    <ReactPaginate previousLabel={"上一页"}
                                                   nextLabel={"下一页"}
                                                   breakLabel={"..."}
                                                   pageNum={totalPages}
                                                   marginPagesDisplayed={3}
                                                   pageRangeDisplayed={4}
                                                   clickCallback={this.props.handlePageClick}
                                                   containerClassName={"pagination"}
                                                   subContainerClassName={"pages pagination"}
                                                   activeClassName={"active"}
                                                   forceSelected={pageParam-1}/>

                                </div>
                            )
                        }
                    })()}

                    {(()=> {
                        if (activeReply == -1 && commentStatus == "open") {
                            return (
                                <div className="mt30" key={-1}>
                                    <CommentForm
                                        formKey={"-1"}
                                        initialValues={{parent:0,post:this.props.postID}}/>
                                </div>
                            )
                        }
                    })()}
                </ul>

            </div>

        )

    }
}


