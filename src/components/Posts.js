import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getPosts} from "../actions";
import moment from "moment";
import Category from "./Category";
import ReactPaginate from 'react-paginate';

export default class Posts extends Component {

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
        let {totalPages,postList,handlePageClick,categories,getCategoryParam,getKeywordParam,getPageParam} = this.props;

        let currentCat = categories.filter((cat)=> {
            return cat.slug == getCategoryParam()
        });

        return (
            <div>

                {(()=> {

                    if (getCategoryParam() && currentCat.length > 0) {
                        return (
                            <div className="pb20 tac list_title">

                                <div className="paper dib paper_white shadow cover sticker">

                                    <p>'{currentCat[0].name}'下所有文章</p>

                                </div>

                            </div>
                        )
                    }

                    if (getKeywordParam()) {
                        return (
                            <div className="pb20 tac list_title">

                                <div className="paper dib paper_white shadow cover sticker">

                                    <p>'{getKeywordParam()}'的搜索结果</p>

                                </div>

                            </div>
                        )
                    }

                })()}


                {postList.map(function (post) {
                    return (
                        <div className="line_paper mb20 shadow sticker" key={post.id}>
                            <h3><Link to={`/${post.slug}`}>{post.title.rendered}</Link></h3>
                            <div className="arc_meta">
                                <time className="metaItem">{moment(post.date).format("YYYY-MM-DD")}</time>
                                <span>|</span>
                                <span>
                                    <Category categories={post.cateGory}/>
                                </span>
                                <span>|</span>
                                <span><a href="#">{post.commentsNo}条评论</a></span>
                            </div>
                            <div className="arc_cont"
                                 dangerouslySetInnerHTML={_this.createMarkup(post.excerpt.rendered)}>
                            </div>

                            <div className="tar">
                                <a href="#" className="paper btn paper_purple">阅读全文</a>
                            </div>
                        </div>
                    )
                })}
                <div className="mt20 mb20 tac">
                    <ReactPaginate previousLabel={"上一页"}
                                   nextLabel={"下一页"}
                                   breakLabel={<a href="">...</a>}
                                   pageNum={totalPages}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   clickCallback={handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   forceSelected={getPageParam()-1}
                                   activeClassName={"active"}/>
                </div>
            </div>
        );
    }
}

