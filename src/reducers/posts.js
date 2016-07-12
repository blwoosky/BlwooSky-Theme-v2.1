import { GET_POSTS,GET_POST } from '../actions';


const defaultState = {
    postList: {
        data: [],
        totalPages: 1
    },
    post: {
        data: {
            id: -1,
            title: "",
            content: "",
            commentsNo: 0,
            date: "0000-00-00",
            cateGory: []
        }
    }
};

//console.log(JSON.stringify(defaultState));


export default function posts(state = defaultState, action) {

    //console.log(action);

    switch (action.type) {

        case GET_POSTS:

            //console.log(action.payload);

            return {
                ...state,
                postList: {
                    data: action.payload.data,
                    totalPages: parseInt(action.payload.headers["x-wp-totalpages"])
                }

            };

        case GET_POST:
            return {
                ...state,
                post: {
                    data: action.payload.data[0]
                }
            };

        default:
            return state;


    }

}