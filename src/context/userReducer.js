//Types
import {
    LOGIN_USER,
    SELECT_CHANNEL,
    ADD_NEW_CHANNEL
} from '../types'

const UserReducer = (state, action) => {
    switch(action.type){

        case LOGIN_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                lastname: action.payload.lastname,
                username: action.payload.username,
                image: action.payload.image,
                channels: action.payload.channels
            }
        case ADD_NEW_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, action.payload]
            }
        case SELECT_CHANNEL:
            return {
                ...state,
                channel: action.payload
            }
        default:
            return { ...state }
    }
}

export default UserReducer;