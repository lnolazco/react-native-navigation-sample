import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const Home = props => {
  const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native Navigation Sample!
            </Text>
            <Button
                onPress={() => navigate('DrawerOpen')}
                title="Open drawer"
            />
        </View>
    );
};

export default Home;