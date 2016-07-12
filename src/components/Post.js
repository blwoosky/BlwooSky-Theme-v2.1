import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPosts} from "../actions";
import moment from "moment";
import Category from "./Category";
import CommentsContainer from "./../containers/CommentsContainer";

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.createMarkup = this.createMarkup.bind(this);
    }


    createMarkup(html) {

        return {
            __html: html
        };

    }

    render() {
        let _this = this;
        let {post} = this.props;

        return (
            <div>
                <div className="pb20 pt20 tac list_title">
                    <div className="paper dib paper_white shadow cover sticker">
                        {post.title.rendered}
                    </div>
                </div>
                <div className="main_content arc_content">

                    <div className="line_paper mb20 shadow sticker p20">

                        <div className="arc_meta">
                            <time className="metaItem">{moment(post.date).format("YYYY-MM-DD")}</time>
                            <span>|</span>
                                <span>
                                    <Category categories={post.cateGory}/>
                                </span>
                            <span>|</span>
                            <span><a href="#">{post.commentsNo}条评论</a></span>
                        </div>
                        <div className="arc_show"
                             dangerouslySetInnerHTML={_this.createMarkup(post.content.rendered)}>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentsContainer commentStatus={post.comment_status} postID={post.id} {...this.props} {...this}/>
                </div>
            </div>
        )
    }


}

