import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from './context/userContext';
//GraphQL
import { useQuery } from '@apollo/client';

const withAuth = ( Component ) => {
    return (() => {
        const context = useContext(UserContext);
        const { authenticate } = context;

        const {data, loading, error} = useQuery(GET_USER_DATA);

        useEffect(() => {
            if(data){
                if(data.user){
                    authenticate(data.user);
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