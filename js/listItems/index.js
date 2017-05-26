import React, {Component} from 'react'
import {ListView, Text}  from 'react-native'
import { observer } from  'mobx-react/native'

@observer
export default class ListItems extends Component {
	constructor(props, context) {
		super(props, context)
	}
	render() {
        const {redditStore} = this.props
        console.warn(redditStore.loading)
        if (redditStore.loading) {
            return this.renderLoadingView()
        } 
       
        return ( <Text>
                  Loaded
                </Text>)
    }
    renderLoadingView() {
        return (  
              <Text>
                Loading movies...
              </Text> );
  }
}

