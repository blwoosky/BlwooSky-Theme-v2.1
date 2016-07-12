import { GET_CATEGORIES } from '../actions';


const defaultState = {
    categories: {
        data: []
    }
};

//console.log(JSON.stringify(defaultState));


export default function categories(state = defaultState, action) {

    switch (action.type) {

        case GET_CATEGORIES:

            //console.log(action.payload);
            return {
                ...state.categories,
                categories: {
                    data: action.payload.data
                }
            };

        default:
            return state;


    }

}