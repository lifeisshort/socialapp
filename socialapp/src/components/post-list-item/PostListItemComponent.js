import React, { Component } from 'react' 
import "./PostListItem.css"
import  postIcon  from "../../images/postIcon.png"

export default class PostListItem extends Component {
  

    render() {
        return (
            <div className="post-list-item">
            <div className="post-icon">
            <img alt={this.props.post.title} srcSet={postIcon}></img>
            </div>
            <div className="post-info">
                <div className="post-info-item"> {this.props.post.title}</div> 
            </div>
        </div>
        )
    }
}
