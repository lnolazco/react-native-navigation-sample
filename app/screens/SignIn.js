import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { onSignIn } from '../services/auth';

const SignIn = (props) => {
    const { navigate } = props.navigation;

    return (
        <View>
            <Text>
                SignIn SCREEN!
            </Text>
            <Button
                onPress={() => {
                    onSignIn('cathy@lamethode.com', '123456').then(() => {
                        navigate('SignedIn');
                    });
                }}
                title="SIGN IN"
            />
            <Button
                onPress={() => navigate('SignUp')}
                title="SIGN UP"
            />
        </View>
    );
};

export default SignIn;
