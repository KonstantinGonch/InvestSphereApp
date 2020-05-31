import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Auth } from './components/Auth';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
       <Route exact path='/' component={Auth} />
       <Route exact path='/main' component={Home} />
       <Route path='/counter' component={Counter} />
       <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
