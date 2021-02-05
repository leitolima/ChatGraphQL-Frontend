import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/signup';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </Router>
    )
}

export default App;