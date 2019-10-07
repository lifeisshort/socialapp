import React, { Component } from 'react'  
import "./UserList.css"  
import UserListItem from '../user-list-item/UserListItem';

export default class UserList extends Component { 
    render() {
        return (
            <div className="user-list">   
                {this.props.users.map((user) => {
                  return <UserListItem key={user.ID} user={user}></UserListItem>
                })}
            </div>
        )
    }
}
 