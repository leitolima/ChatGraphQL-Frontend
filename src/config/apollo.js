import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'node-fetch';
import Cookie from 'js-cookie';

const http = createHttpLink({
    uri: process.env.NODE_ENV === 'production' 
        ? ''
        : 'http://localhost:4000/graphql',
    fetchOptions: {
        fetch
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache({addTypename: false}),
    link: http,
    connectToDevTools: true,
});

export default client;