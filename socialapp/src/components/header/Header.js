import React, { Component } from 'react'
import { Link  } from 'react-router-dom' 
import "./Header.css"

export default class Header extends Component {

    render() {
        return (
            <div className="header-component">
                <ul >
                    <li>
                        <Link to="/" >Home</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="/update">UpdateObject</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
