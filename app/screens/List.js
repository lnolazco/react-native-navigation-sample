import React, { Component } from "react";
import { Button, Text, View } from "react-native";

const List = (props) => {
    const { navigate } = props.navigation;

    return (
        <View>
            <Text>
            LIST SCREEN
            </Text>
            <Button
                onPress={() => navigate('Profile')}
                title="Go to Profile Screen"
            />
        </View>
    );
};

export default List;
