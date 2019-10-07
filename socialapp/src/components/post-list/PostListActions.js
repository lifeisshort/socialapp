import { POSTS_FETCH_SUCCES, POSTS_FETCH_REQUESTED, POSTS_FETCH_ERROR } from "./PostListTypes";

export const fetchPosts = (searchCriteria) => ((dispatch) => {
    dispatch({
        type: POSTS_FETCH_REQUESTED
    });

    let searchCriteriaParam = searchCriteria ?`?title=${searchCriteria}` : "";
    fetch(`https://gorest.co.in/public-api/posts${searchCriteriaParam}`,{
        headers :{
            "Authorization":"Bearer MgLURURBTDhMI5Fpd_Rc2eqpP4LljzraAng9"
        }
    }) 
    .then(res => res.json()) // Ensure result is ready
    //Parse result and decide success or not its depent on the server
    .then(response => response._meta.success ? response : Promise.reject(response._meta.message))
    //If Success dispatch action to update store
    .then(response  => {
        dispatch({
            type: POSTS_FETCH_SUCCES,
            payload: response.result
        }) 
    })
    .catch(err => {
        //If error dispatch action to update state to error
        dispatch({
            type: POSTS_FETCH_ERROR,
            payload: err
        }) 
    });  

})




