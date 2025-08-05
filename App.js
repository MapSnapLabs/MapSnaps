import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SnapMapScreen from './src/screens/SnapMapScreen';
import SOSScreen from './src/screens/SOSScreen';
import FriendFinderScreen from './src/screens/FriendFinderScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SnapMap" component={SnapMapScreen} />
        <Stack.Screen name="SOS" component={SOSScreen} />
        <Stack.Screen name="FriendFinder" component={FriendFinderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}