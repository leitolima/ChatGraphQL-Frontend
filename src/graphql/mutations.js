import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`
    mutation createNewUser($input: UserInput){
        createNewUser(input: $input)
    }
`;

export const LOG_IN = gql`
    mutation logIn($input: UserInput){
        user: logIn(input: $input){
            id
            name
            lastname
            username
            image
            channels{
                id
                name
            }
        }
    }
`;

export const CREATE_NEW_CHANNEL = gql`
    mutation createNewChannel($input: ChannelInput){
        channel: createNewChannel(input: $input){
            id
            name
            description
            creator{ 
                username 
                image 
            }
            members{ 
                username 
                image 
            }
            messages{
                user{ 
                    username 
                    image 
                }
                text
                media
            }
        }
    }
`;

export const SEND_NEW_MESSAGE = gql`
    mutation sendNewMessage($input: String, $id: ID){
        message: sendNewMessage(input: $input, id: $id){
            id
            text
        }
    }
`;

export const JOIN_TO_CHANNEL = gql`
    mutation joinToChannel($id: ID){
        channel: joinToChannel(id: $id){
            id
            name
            members{
                username
                image
            }
        }
    }
`;

export const ADD_CHANNEL_FAVORITE = gql`
    mutation addToFavorites($id: ID){
        addToFavorites(id: $id)
    }
`;

export const DELETE_CHANNEL_FAVORITE = gql`
    mutation deleteFromFavorites($id: ID){
        deleteFromFavorites(id: $id)
    }
`;