import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./PostListFilter.css"
import {  clearFilter, setFilter } from './PostListFilterActions';
import { debounce } from 'lodash'
import { fetchPosts } from '../post-list/PostListActions';

export class PostListFilterComponent extends Component {

    componentDidMount(){
        this.props.clearFilter();
    }
    componentWillUnmount(){
        this.handleChange.cancel();
    }
 
    handleChange = debounce((val) => {
        this.props.fetchPosts(val)
    },200);
    render() {
        return (
            <div className="post-list-filter">
                <input type="text" className="input" placeholder="Search..." onChange= {(e) => {
                this.props.setFilter(e.target.value);
                 this.handleChange(e.target.value);
                }} value={this.props.userNameSearch}  />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userNameSearch : state.PostListFilterReducer.userNameSearch
})

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter : (searchCriteria) => {
            dispatch(setFilter(searchCriteria))
        },
        clearFilter : () => {
            dispatch(clearFilter())
        },
        fetchPosts : (searchCriteria) => {
            dispatch(fetchPosts(searchCriteria))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilterComponent)
