import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostListItem from '../post-list-item/PostListItemComponent';
import "./PostList.css"
import { fetchPosts } from './PostListActions';


class PostListComponent extends Component {

  componentDidMount() { 
    this.props.fetchPosts();
  }
 
  render() {

    if(this.props.errorMessage)
    return <div>{this.props.errorMessage}</div>;

    if(this.props.isLoading)
    return <div>Loading...</div>;
 
    return ( 
      <div className="post-list">
        {this.props.posts.map((post) => {
          return <PostListItem key={post.id} post={post}></PostListItem>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostListReducer.posts,
    isLoading: state.PostListReducer.isLoading,
    errorMessage: state.PostListReducer.errorMessage,
    userNameSearch : state.PostListFilterReducer.userNameSearch
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListComponent)
