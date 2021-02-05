import React from 'react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/signup';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                </Switch>
            </Router>
        </ApolloProvider>
    )
}

export default App;