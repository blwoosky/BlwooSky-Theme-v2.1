import React, { Component } from 'react';
import {reduxForm} from 'redux-form';


import {createComment} from './../actions'

class CommentForm extends Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(props) {

        this.props.createComment(props);

    }


    render() {

        //console.log(this.props);
        const {fields: {author_name, author_url, author_email, content}, handleSubmit} = this.props;
        return (
            <div className="respond">
                <form onSubmit={handleSubmit(this.onSubmit)}>

                    <div>
                        <div className="respond-item">
                            <input placeholder="昵称-Name (必填)" required type="text" {...author_name}/>
                        </div>

                        <div className="respond-item">
                            <input placeholder="邮箱-Email (必填)" required type="text" {...author_email}/>
                        </div>

                        <div className="respond-item">
                            <input placeholder="网址-URL" type="text" {...author_url}/>
                        </div>
                        <div className="respond-item">
                            <textarea required rows="13" placeholder="回复内容-Comment" {...content}/>
                        </div>
                        <div className="respond-item">
                            <input name="submit" type="submit" value="提交留言"
                                   className="paper paper_purple cover shadow"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

CommentForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'createCommentForm',                           // a unique name for this form
    fields: ['author_name', 'author_url', 'author_email', 'content', 'parent', 'post'] // all the fields in your form
}, null, {createComment})(CommentForm);

export default CommentForm;

