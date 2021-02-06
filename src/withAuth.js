import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from './context/userContext';
//GraphQL
import { useQuery } from '@apollo/client';
import { GET_USER } from './graphql/querys';

const withAuth = ( Component ) => {
    return (() => {
        const context = useContext(UserContext);
        const { loginUser } = context;

        const {data, loading, error} = useQuery(GET_USER);

        useEffect(() => {
            if(data){
                if(data.user){
                    loginUser(data.user);
                } else {
                    <Redirect to='/login'/>
                }
            }
            // eslint-disable-next-line
        }, [loading]);

        const renderPage = () => {
            if(loading) return null
            if(error) return <Redirect to='/login'/>
            if(!data) return null;
            return <Component />
        }

        return renderPage();
    });
}

export default withAuth;