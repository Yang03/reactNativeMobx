import React, { Component } from 'react'
import { observer } from  'mobx-react/native'
import {
  StyleSheet,
  View,
} from 'react-native'

import ListItems from './listItems'

@observer
export default class App extends Component {
    constructor(props, context) {
		super(props, context)
	}
    componentWillMount() {
        this.props.redditStore.getReddites()
    }
    render() {
        const {redditStore} = this.props
        return (
                <View>
                    <ListItems redditStore={redditStore}></ListItems>
                </View>    
        )
    }
}