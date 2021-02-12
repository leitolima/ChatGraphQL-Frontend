import { gql } from '@apollo/client';

export const SUBCRIPTION = gql`
    subscription newMessage($channel: ID){
        message: newMessage(channel: $channel){
            id
            text
            user{
                username
                image
            }
        }
    }
`