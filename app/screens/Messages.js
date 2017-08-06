import React, { Component } from "react";
import { Button, Text, View } from "react-native";

const Messages = (props) => {
    const { navigate } = props.navigation;

    return (
        <View>
            <Text>
                Messages!
            </Text>
            <Button
                onPress={() => navigate('Chat')}
                title="Go to Chat Screen"
            />
        </View>
    );
};


export default Messages;
