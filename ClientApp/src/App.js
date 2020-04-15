import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { About } from './components/About';
import RocketLauncherContent from './pages/RocketLaunchContent'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={RocketLauncherContent} />
        <Route path='/about' component={About} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
