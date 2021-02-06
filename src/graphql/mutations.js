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