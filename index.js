import React from 'react'
import { Provider } from 'react-redux'
import store from './state/store/store'
import App from './App';
import { registerRootComponent } from 'expo';

const ConnectedApp = () => <Provider store={store}><App/></Provider>

registerRootComponent(ConnectedApp);
