import { POSTS_FILTER_SETFILTER , POSTS_FILTER_RESET } from "./PostListFilterTypes";

const initialState = {
    userNameSearch :"" 
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case POSTS_FILTER_SETFILTER:
        return { ...state, userNameSearch : payload }

        case POSTS_FILTER_RESET:
        return { ...state, userNameSearch : "" }

    default:
        return state
    }
}
