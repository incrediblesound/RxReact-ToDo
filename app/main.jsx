import React from 'react';
import Layout from './components/layout.jsx';
import store from './services/store.js';
import _ from 'lodash';

var Main = React.createClass({
  updateApp: function(){
    this.setState(store.toJSON())
  },
  componentWillMount: function(){
    store.onUpdate(_.bind(this.updateApp, this));
    this.updateApp();
  },
  render() {
    return <Layout todos={this.state.todos}></Layout>
  }
})

React.render(
  React.createElement(Main, store.toJSON()),
  document.getElementById('app')
)
