import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import Main from "./components/Main";

import PostsContainer from "./containers/PostsContainer";
import PostContainer from "./containers/PostContainer";
import ArticlesCategoryContainer from "./containers/ArticlesCategoryContainer";
import GuestBookContainer from "./containers/GuestBookContainer";


const store = configureStore();

import "./sass/style.scss";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={PostsContainer}/>

                <Route path="/page(/:pageNum)" component={PostsContainer}/>
                <Route path="/category/:categorySlug(/:pageNum)" component={PostsContainer}/>

                <Route path="/search/:keyWord(/:pageNum)" component={PostsContainer}/>

                <Route path="/articles" component={ArticlesCategoryContainer}/>
                <Route path="/guest-book" component={GuestBookContainer}/>
                <Route path="/:slug" component={PostContainer}/>
                <Route path="/:slug/comments/(:pageNum)" component={PostContainer}/>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
