import React, { Component } from 'react' 
import "./UserListItem.css"
import  userIcon from "../../images/userIcon.png"

export default class UserListItem extends Component {
  
    render() {
        return (
            <div className="user-list-item">
                <div className="user-icon">
                <img alt={this.props.user.FirstName} srcSet={userIcon}></img>
                </div>
                <div className="user-info">
                    <div className="user-info-item"> {this.props.user.FirstName}</div>
                    <div  className="user-info-item"> {this.props.user.LastName}</div> 
                </div>
            </div>
        )
    }
}
