import React, { Component } from 'react'
import "./UserPage.css"  
import UserList from '../../components/user-list/UserListComponent';

export default class UserPage extends Component {

    state = {
        users: [
          {
            ID : 0 ,
            FirstName : "Murat",
            LastName : "Akkas",
            Status :0
          },
          {
            ID : 1 ,
            FirstName : "Test",
            LastName : "Deneme",
            Status :1
          }
        ]
      }

    render() {
        return (
            <div className="user-page">
               <div className="user-page-header">
                Users
               </div>
               <div className="user-page-list">
                    <UserList users={this.state.users}></UserList>
               </div>
            </div>
        )
    }
}
