import React, { Component } from "react";
import { Button, Text, View } from "react-native";

const Profile = (props) => {
    const { navigate } = props.navigation;

    return (
        <View>
            <Text>
                Profile!
            </Text>
            <Button
                onPress={() => navigate('Chat')}
                title="Go to Chat Screen"
            />
        </View>
    );
};

export default Profile;
