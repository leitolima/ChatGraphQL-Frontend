import { gql } from '@apollo/client';

export const SUBCRIPTION = gql`
    subscription{
        message: newMessage{
            text
            user{
                username
            }
        }
    }
`