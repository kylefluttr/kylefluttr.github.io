import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './lib';

export default class App extends Component {
  render() {
    return(
			<Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
