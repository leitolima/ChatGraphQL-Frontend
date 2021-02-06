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
        }
    }
`;