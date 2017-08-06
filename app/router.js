import React from "react";
import { Button, AppRegistry } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import SignOut from "./screens/SignOut";
import Home from "./screens/Home";
import List from "./screens/List";
import Chat from "./screens/Chat";
import Messages from "./screens/Messages";
import Profile from "./screens/Profile";

export const SignedOut = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up'
        }
    },
});

const SignedIn = DrawerNavigator({
    Home: {
        screen: StackNavigator({
            Home: {
                screen: Home,
                navigationOptions: (props) => {
                    return {
                        title: 'Home title',
                        headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
                    }
                }
            }
        }),
        navigationOptions: { drawerLabel: 'Home Menu' },
    },
    List: {
        screen: StackNavigator({
            List: {
                screen: List,
                navigationOptions: (props) => {
                    return {
                        title: 'List Title',
                        headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
                    }
                }
            },
            Profile: {
                screen: Profile,
                navigationOptions: {
                    title: 'Profile Title',
                },
            },
            Chat: {
                screen: Chat,
                navigationOptions: {
                    title: 'Chat Title',
                },
            }
        }),
        navigationOptions: {
            drawerLabel: 'List Menu'
        },
    },
    Messages: {
        screen: StackNavigator({
            Messages: {
                screen: Messages,
                navigationOptions: (props) => {
                    return {
                        title: 'Messages Title',
                        headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
                    }
                }
            },
            Chat: {
                screen: Chat,
                navigationOptions: {
                    title: 'Chat Title',
                },
            }
        }),
        navigationOptions: {
            title: 'Messages Title',
            drawerLabel: 'Messages Menu'
        },
    },
    'Sign out': {
        screen: SignOut
    }
});

export function createRootNavigator(signedIn) {
    return StackNavigator(
        {
        SignedIn: {
            screen: SignedIn,
            navigationOptions: {
            gesturesEnabled: false
            }
        },
        SignedOut: {
            screen: SignedOut,
            navigationOptions: {
            gesturesEnabled: false
            }
        }
        },
        {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
}
// AppRegistry.registerComponent("SampleNavigation", () => App);
// Complete with this:
// https://github.com/spencercarli/react-navigation-auth-flow/tree/finished-code
