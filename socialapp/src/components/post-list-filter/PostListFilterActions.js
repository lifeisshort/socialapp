import { POSTS_FILTER_SETFILTER , POSTS_FILTER_RESET } from "./PostListFilterTypes"; 
import { fetchPosts } from "../post-list/PostListActions";

export const setFilter = (userNameSearch) => (
    (dispatch) => {
        dispatch({
            type: POSTS_FILTER_SETFILTER,
            payload : userNameSearch
        });   
    }
);

export const clearFilter = () => (
    (dispatch) => {
        dispatch({
            type: POSTS_FILTER_RESET 
        }); 
    }
)

