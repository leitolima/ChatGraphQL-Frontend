import React, { useReducer } from 'react';
//Context
import UserContext from './userContext';
import UserReducer from './userReducer';

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

    return (
        <UserContext.Provider
            value={{
                id: state.id,
                name: state.name,
                lastname: state.lastname,
                username: state.username,
                image: state.image,
                chats: state.chats,
                chat: state.chat
            }}
        >
            { children }
        </UserContext.Provider>
    )
}

export default UserState;