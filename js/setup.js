
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app'
import RedditStore from './store/redditStore'

import { inject, observer } from 'mobx-react/native'

const redditStore = new RedditStore()

@observer
class Root extends Component {
    render() {
        return (
                <App redditStore={redditStore}/> 
        );
    }
}

export default () => {
    return Root
}
