//Types
import {
    LOGIN_USER,
    SELECT_CHANNEL,
    ADD_NEW_CHANNEL,
    JOIN_TO_CHANNEL,
    SET_MESSAGES,
    SET_NEW_MESSAGE,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    DELETE_CHANNEL
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
                channels: action.payload.channels,
                favorites: action.payload.favorites
            }
        case ADD_NEW_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, {
                    id:  action.payload.id,
                    name:  action.payload.name
                }]
            }
        case SELECT_CHANNEL:
            return {
                ...state,
                channel: action.payload
            }
        case JOIN_TO_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, action.payload],
                channel: {
                    ...state.channel, 
                    members: action.payload.members
                }
            }
        case SET_MESSAGES: 
            return {
                ...state,
                messages: action.payload
            }
        case SET_NEW_MESSAGE: 
            return{
                ...state,
                messages: [...state.messages, action.payload]
            }
        case ADD_FAVORITE: 
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITE: 
            return{
                ...state,
                favorites: state.favorites.filter(ch => ch.id !== action.payload)
            }
        case DELETE_CHANNEL: 
            return{
                ...state,
                channel: null,
                messages: [],
                channels: state.channels.filter(ch => ch.id !== action.payload)
            }
        default:
            return { ...state }
    }
}

export default UserReducer;