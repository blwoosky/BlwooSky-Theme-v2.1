import { GET_GUESTBOOK } from '../actions';


const defaultState = {
    data: {
        id: -1,
        comment_status: true
    }
};

//console.log(JSON.stringify(defaultState));


export default function posts(state = defaultState, action) {

    //console.log(action);

    switch (action.type) {

        case GET_GUESTBOOK:

            //console.log(action.payload);

            return {
                ...state,
                data: {
                    ...action.payload.data[0]
                }

            };

        default:
            return state;


    }

}