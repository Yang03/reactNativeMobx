
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app'

import { inject, observer } from 'mobx-react/native'

//const redditStore = new RedditStore()

@observer
class Root extends Component {
    render() {
        return (
                <App/> 
        );
    }
}

export default () => {
    return Root
}
