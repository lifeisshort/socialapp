import React, { Component } from 'react'
import "./PostPage.css" 
import PostList from '../../components/post-list/PostList';
import PostListFilter from '../../components/post-list-filter/PostListFilter';
export default class PostPage extends Component {

  /*    state2 = {
      posts: [
        {
          ID: 0,
          Title: "Post1"
        },
        {
          ID: 1,
          Title: "Post2"
        }
      ]
    }  
   */
  render() {
    return (
      <div className="post-page">
        <div className="post-page-header">
          Posts
               </div>
        <div className="post-page-list">
        <PostListFilter></PostListFilter>
          <PostList posts={[
            {
              ID: 0,
              Title: "Post1"
            },
            {
              ID: 1,
              Title: "Post2"
            }
          ]} ></PostList>
        </div>
      </div>
    )
  }
}
