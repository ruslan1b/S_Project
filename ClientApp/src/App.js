import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { Partners } from './components/Partners';
import { Contacts } from './components/Contacts';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />        
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/partners' component={Partners} />
        <Route exact path='/contacts' component={Contacts} />
      </Layout>
    );
  }
}
