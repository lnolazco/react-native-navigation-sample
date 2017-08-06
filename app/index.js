import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { isSignedIn } from './services/auth';
import { createRootNavigator } from './router';

class App extends Component {
    state = {
        signedIn: false,
        checkedSignIn: false
    };

    componentWillMount() {
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(err => alert("An error occurred"));
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
            return null;
        }

        const Layout = createRootNavigator(signedIn);
        return <Layout />;
    }
}

AppRegistry.registerComponent("SampleNavigation", () => App);