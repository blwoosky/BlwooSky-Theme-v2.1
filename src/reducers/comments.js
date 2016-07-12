import { GET_COMMENTS,CREATE_COMMENT } from '../actions';

const defaultState = {
    allComments: {
        postID: -1,
        data: [],
        totalPages: 1
    },
    newComments: {
        data: []
    }
};

export default function comments(state = defaultState, {type,payload}) {

    switch (type) {

        case GET_COMMENTS:


            let totalPages = payload.headers["x-wp-totalpages"],
                commentsData = payload.data;

            return {
                ...state, allComments: {
                    data: commentsData,
                    totalPages: parseInt(totalPages)
                }
            };
            break;

        case CREATE_COMMENT:

            return {
                ...state, newComments: {
                    data: [...state.newComments.data, payload.data]
                }
            };


        default:
            return state;


    }
}















