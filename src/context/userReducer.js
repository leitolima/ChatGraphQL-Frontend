//Types
import {
    LOGIN_USER
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
                image: action.payload.image
            }

        default:
            return { ...state }
    }
}

export default UserReducer;