import React, { useReducer } from 'react';
//Context
import UserContext from './userContext';
import UserReducer from './userReducer';
//Types
import {
    LOGIN_USER
} from '../types'

const UserState = ({ children }) => {
    const initialState = {
        id: null,
        name: '',
        lastname: '',
        username: '',
        image: '',
        chats: [],
        chat: []
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const loginUser = user => {
        dispatch({
            type: LOGIN_USER,
            payload: user
        })
    }

    return (
        <UserContext.Provider
            value={{
                id: state.id,
                name: state.name,
                lastname: state.lastname,
                username: state.username,
                image: state.image,
                chats: state.chats,
                chat: state.chat,
                loginUser
            }}
        >
            { children }
        </UserContext.Provider>
    )
}

export default UserState;