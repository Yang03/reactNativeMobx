import React, { Component } from 'react'
import { observer } from  'mobx-react/native'
import Login from './login'

@observer
export default class App extends Component {
    constructor(props, context) {
		super(props, context)
	}
    componentWillMount() {
        //this.props.redditStore.getReddites()
    }
    render() {
        const {redditStore} = this.props
        return (
                <Login/>                   
        )
    }
}