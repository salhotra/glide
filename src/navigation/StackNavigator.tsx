import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import RoutineScreen from '../screens/RoutineScreen';
import CreateRoutineScreen from '../screens/CreateRoutineScreen';
import {RootStackParamList} from '../types/navigation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Routine" component={RoutineScreen} />
      <Stack.Screen name="CreateRoutine" component={CreateRoutineScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
