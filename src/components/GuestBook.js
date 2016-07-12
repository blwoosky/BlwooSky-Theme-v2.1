import React, { Component } from 'react';
import CommentsContainer from "./../containers/CommentsContainer";


export default class GuestBook extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _this = this;
        let {guest} = this.props;

        return (
            <div>
                <div className="pb20 pt20 tac list_title">
                    <div className="paper dib paper_white shadow cover sticker">
                        留言板
                    </div>
                </div>

                <div>
                    <CommentsContainer commentStatus={guest.comment_status}
                                       postID={guest.id} {...this.props} {...this}/>
                </div>
            </div>
        )
    }


}

