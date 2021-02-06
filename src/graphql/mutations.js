import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`
    mutation createNewUser($input: UserInput){
        createNewUser(input: $input)
    }
`;