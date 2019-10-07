import { POSTS_FETCH_REQUESTED, POSTS_FETCH_SUCCES, POSTS_FETCH_ERROR } from "./PostListTypes";

const initialState = {
  isLoading: false,
  errorMessage: "",
  posts: [
    {
      id: 0,
      title: "Post1 From redux"
    },
    {
      id: 1,
      title: "Post2  From redux"
    }
  ]
};
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case POSTS_FETCH_REQUESTED:
      return { ...state, isLoading: true }

    case POSTS_FETCH_SUCCES:
      return { ...state, isLoading: false, posts: payload }

    case POSTS_FETCH_ERROR:
      return { ...state, isLoading: false, error: payload }

    default:
      return state
  }
}
