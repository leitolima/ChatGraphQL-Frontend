import React from 'react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserState from './context/userState';
import withAuth from './withAuth';

import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/Home';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <UserState>
                <Router>
                    <Switch>
                        <Route exact path="/" component={withAuth(Home)}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                    </Switch>
                </Router>
            </UserState>
        </ApolloProvider>
    )
}

export default App;