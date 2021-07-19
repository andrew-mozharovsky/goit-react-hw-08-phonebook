import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

import HomeView from './views/HomeView';
import ContactsViews from './views/ContactsViews';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import { getCurrentUser } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.refreshUser();
  }

  render() {
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
  }
}

const mapDispatchToProps = {
  refreshUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
