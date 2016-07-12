import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';


import posts from "./posts";
import categories from "./categories";
import comments from "./comments";
import guestbook from "./guestbook";

const rootReducer = combineReducers({
    posts: posts,
    categories: categories,
    comments: comments,
    guest: guestbook,
    form: formReducer
});

export default rootReducer;