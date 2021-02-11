import { gql } from '@apollo/client';

export const SUBCRIPTION = gql`
    subscription newMessage($channel: ID){
        message: newMessage(channel: $channel){
            text
            user{
                username
            }
        }
    }
`