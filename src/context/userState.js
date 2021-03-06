import React, { useReducer } from 'react';
//Context
import UserContext from './userContext';
import UserReducer from './userReducer';
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

const UserState = ({ children }) => {
    const initialState = {
        id: null,
        name: '',
        lastname: '',
        username: '',
        image: '',
        channels: [],
        channel: null,
        messages: [],
        favorites: []
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const loginUser = user => {
        dispatch({
            type: LOGIN_USER,
            payload: user
        });
    }

    const newChannel = channel => {
        dispatch({
            type: ADD_NEW_CHANNEL,
            payload: channel
        });
    }

    const selectChannel = channel => {
        dispatch({
            type: SELECT_CHANNEL,
            payload: channel
        });
    }

    const joinToChannel = channel => {
        dispatch({
            type: JOIN_TO_CHANNEL,
            payload: channel
        });
    } 
    
    const setMessages = messages => {
        dispatch({
            type: SET_MESSAGES,
            payload: messages
        });
    }

    const addNewMessage = message => {
        dispatch({
            type: SET_NEW_MESSAGE,
            payload: message
        });
    }

    const addFavorite = channel => {
        dispatch({
            type: ADD_FAVORITE,
            payload: channel
        });
    }

    const deleteFavorite = channel => {
        dispatch({
            type: DELETE_FAVORITE,
            payload: channel
        });
    }

    const deleteChannel = channel => {
        dispatch({
            type: DELETE_CHANNEL,
            payload: channel
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
                channels: state.channels,
                favorites: state.favorites,
                channel: state.channel,
                messages: state.messages,
                loginUser,
                newChannel,
                selectChannel,
                joinToChannel,
                setMessages,
                addNewMessage,
                addFavorite,
                deleteFavorite,
                deleteChannel
            }}
        >
            { children }
        </UserContext.Provider>
    )
}

export default UserState;