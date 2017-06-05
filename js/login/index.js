import React, {Component} from 'react'
import {View, Button, StyleSheet, Linking} from 'react-native'

export default class Login extends Component {
    componentDidMount() {
         console.warn('add')
         var url = Linking.getInitialURL().then((url) => {
                        if (url) {
                            console.warn('Initial url is: ' + url);
                        }
                    }).catch(err => console.warn('An error occurred', err));
                    console.warn(1)
         Linking.addEventListener('url', this._handleOpenURL);
    }
    render() {
        return (<View style={styles.container}>
            <View style={styles.btnContainer}>
                <Button title="Login with GitHub" onPress={this.onButtonPress} color="#fff"></Button>
            </View>    
        </View>)    
    }
    onButtonPress() {
        Linking.openURL('http://localhost:3001/login').catch( err => console.error(err))
    }
    _handleOpenURL(event) {
        console.warn(event.url)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    btnContainer: {
        backgroundColor: '#20a0ff',
        width: '90%',
        height: 40    
    }
})
