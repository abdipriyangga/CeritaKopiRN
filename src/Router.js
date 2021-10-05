import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';
import ChooseAuth from './screens/ChooseAuth';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="ChooseAuth"
          component={ChooseAuth}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
