import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

import HomeView from './views/HomeView';
import ContactsViews from './views/ContactsViews';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

const App = () => {
  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.contacts} component={ContactsViews} />
        <Route path={routes.register} component={RegisterView} />
        <Route path={routes.login} component={LoginView} />
      </Switch>
    </div>
  );
};
export default App;
