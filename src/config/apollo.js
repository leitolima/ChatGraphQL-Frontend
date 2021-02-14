import { ApolloClient, InMemoryCache, split, HttpLink, ApolloLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from 'apollo-link-context';
import fetch from 'node-fetch';

const wsLink = new WebSocketLink({
    uri: process.env.NODE_ENV === 'production' 
        ? 'wss://chat-api-backend.herokuapp.com'
        : 'ws://localhost:4000/graphql',
    options: { 
        reconnect: true
    },
});

const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'production' 
        ? 'https://chat-api-backend.herokuapp.com'
        : 'http://localhost:4000/graphql',
    credentials: 'include',
    fetchOptions: { fetch }
});

const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const authLink = setContext((_, {headers}) => {
    return { headers: { ...headers, } }
});


const client = new ApolloClient({
    cache: new InMemoryCache({addTypename: false}),
    link: ApolloLink.from([link]),
    connectToDevTools: true,
});

export default client;