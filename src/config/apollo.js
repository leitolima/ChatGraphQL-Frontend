import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';

const http = createHttpLink({
    uri: process.env.NODE_ENV === 'production' 
        ? ''
        : 'http://localhost:4000/graphql',
    credentials: 'include',
    fetchOptions: {
        fetch
    }
});

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
        }
    }
});


const client = new ApolloClient({
    cache: new InMemoryCache({addTypename: false}),
    link: ApolloLink.from([authLink, http]),
    connectToDevTools: true,
});

export default client;