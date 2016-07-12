import { BASE_WP_URL,CREATE_COMMENT_URL } from "../wp-url";
import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_COMMENTS = "GET_COMMENTS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const GET_GUESTBOOK = "GET_GUESTBOOK";

const WP_URL = `${BASE_WP_URL}/wp/v2/`;

let defaultQuery = {
    page: 1,
    per_page: 3
};

export function getPosts(query = defaultQuery) {

    let postsQuery = {...defaultQuery, ...query};
    let catString = "";
    if (postsQuery.category) {
        catString = `filter[category_name]=${postsQuery.category}`;
        delete postsQuery.category;
    }

    let request = axios.get(`${WP_URL}posts?${catString}`, {
        params: postsQuery
    });

    return {
        type: GET_POSTS,
        payload: request
    }

}

export function getPost(slug) {

    let request = axios.get(`${WP_URL}posts`, {
        params: {
            slug: slug
        }
    });

    return {
        type: GET_POST,
        payload: request
    }

}


export function getCategories() {

    let request = axios.get(`${WP_URL}categories`);

    return {
        type: GET_CATEGORIES,
        payload: request
    }

}


export function getComments(query) {

    let commentsQuery = {per_page: 3, page: 1, orderby: "parent", ...query};

    let request = axios.get(`${WP_URL}comments`, {
        params: commentsQuery
    });

    return {
        type: GET_COMMENTS,
        payload: request
    };

}


export function createComment(props) {

    //console.log("CREATE COMMENT=-=-=-=",props);
    let request = axios.post(`${CREATE_COMMENT_URL}`, props);

    return {
        type: CREATE_COMMENT,
        payload: request
    };

}


export function getGuestBook(slug) {

    let request = axios.get(`${WP_URL}pages`, {
        params: {
            slug: slug
        }
    });

    return {
        type: GET_GUESTBOOK,
        payload: request
    }

}
