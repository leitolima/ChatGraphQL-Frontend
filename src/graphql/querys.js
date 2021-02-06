import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser{
        user: getUser{
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

export const GET_CHANNEL = gql`
    query getChannel($id: ID){
        channel: getChannel(id: $id){
            id
            name
            description
            creator{
                name
                lastname
                username
                image
            }
            members{
                name
                lastname
                username
                image
            }
        }
    }
`;