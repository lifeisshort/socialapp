import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateObjectByKey, updateUsersByIndex } from './UpdateObjectReducer';

class UpdateObjectComponent extends Component {
    state = {
        currentVal: 0
    }
    render() {
        return (
            <div>
                <input value={this.props.housesDict["hufflepuff"].val}></input>
                <input onChange={(e) => {
                    this.setState({ currentVal: e.currentTarget.value });
                }} ></input>
                <input type="button" value="Change Value" onClick={() => {
                    this.props.updateObjectByKey("hufflepuff", this.state.currentVal)
                }}></input>

                <input type="button" value="Update Second Item to test" onClick={() => {
                    this.props.updateUsersByIndex(1, "test")
                }}></input>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    housesDict: state.UpdateObjectReducer.houses
})

const mapDispatchToProps = (dispatch) => ({
    updateObjectByKey: (key, value) => {
        dispatch(updateObjectByKey(key, value))
    },
    updateUsersByIndex: (index, name) => {
        dispatch(updateUsersByIndex(index, name))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateObjectComponent)
