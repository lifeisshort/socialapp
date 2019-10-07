export const UPDATE_OBJECT_WITHKEY = "UPDATE_OBJECT_WITHKEY"
export const UPDATE_USERS_WITHINDEX = "UPDATE_USERS_WITHINDEX"

export const updateObjectByKey = (key, value) => ({
    type: UPDATE_OBJECT_WITHKEY,
    payload: {
        key: key,
        value: value
    }
})

export const updateUsersByIndex = (index, name) => ({
    type: UPDATE_USERS_WITHINDEX,
    payload: {
        index: index,
        name: name
    }
})


const initialState = {

    users: [
        {
            name: "ahmet",
            id: 3
        },
        {
            name: "methmet",
            id: 2
        },

    ],

    houses: {
        gryffindor: {
            val: 1,
            points: 15
        },
        ravenclaw: {
            val: 2,
            points: 18
        },
        hufflepuff: {
            val: 3,
            points: 7
        },
        slytherin: {
            val: 4,
            points: 5
        }
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_OBJECT_WITHKEY:
            return {
                ...state, houses: {
                    ...state.houses, [payload.key]: {
                        ...state.houses[payload.key],
                        val: payload.value
                    }
                }
            }

        case UPDATE_USERS_WITHINDEX:
            return {
                ...state, users: state.users.map((item, index) => {
                    if (index === payload.index) return {
                        ...item, name: payload.name
                    }
                    return item;
                }) 
            } 

        default:
            return state
    }
}
