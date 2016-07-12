import React, { Component } from 'react';
import {Link} from "react-router";
import moment from "moment";
import CommentForm from "./CommentForm";


export default class CommentItem extends Component {

    constructor(props) {
        super(props);
    }

    createMarkup(html) {

        return {
            __html: html
        };

    }

    render() {

        let _this = this;
        let {comment,comments,newComments,commentStatus,getComment,canReply,setActiveReply,activeReply} = this.props;
        return (
            <li className="comment">
                <div className="fix">
                    <div className="img">
                        <img src={ comment.author_avatar_urls["96"].replace(/http\:/, "https\:") } alt=""/></div>
                    <div className="comment-content cell">
                        <div className="vcard">
                            {comment.author_name} 于
                            { moment(comment.date).format("YYYY - MM - DD") } 说:
                        </div>
                        <div className="comment-body"
                             dangerouslySetInnerHTML={this.createMarkup(comment.content.rendered)}>
                        </div>
                    </div>
                    {
                        (()=> {
                            if (canReply) {
                                return (
                                    <div className="reply">
                                        <a className="comment-reply-link"
                                           onClick={()=>{setActiveReply(comment.id)}}>回复</a>
                                    </div>
                                )
                            }
                        })()
                    }

                </div>

                {newComments.map(function (newComment) {
                    //console.log(comment);
                    if (newComment.parent == comment.id) {
                        return getComment(newComment, comments, false);
                    }
                })}

                {(()=> {
                    if (activeReply == comment.id && commentStatus == "open") {
                        return (
                            <div className="mt30" key={comment.id}>
                                <div className="tar">
                                    <a className="comment-reply-link"
                                       onClick={()=>{setActiveReply(-1)}}>取消回复</a>
                                </div>
                                <CommentForm
                                    formKey={String(comment.id)}
                                    initialValues={{parent:comment.id,post:this.props.postID}}/>
                            </div>
                        )
                    }
                })()}

                <ul>

                    {comments.map(function (childComment) {
                        //console.log(comment);
                        if (childComment.parent == comment.id) {
                            return getComment(childComment, comments, false);
                        }

                    })}
                </ul>

            </li>
        );
    }
}