import { combineReducers } from 'redux' 
import PostListReducer from '../components/post-list/PostListReducer';
import PostListFilterReducer from '../components/post-list-filter/PostListFilterReducer';
import UpdateObjectReducer from '../components/update-object/UpdateObjectReducer';

 
export default combineReducers({
  PostListReducer,
  PostListFilterReducer,
  UpdateObjectReducer
})
