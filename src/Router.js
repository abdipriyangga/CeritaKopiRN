import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import CustomDrawer from './components/CustomDrawer';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';
import ChooseAuth from './screens/ChooseAuth';
import Home from './screens/Home';
import Profile from './screens/Profile';
import ProductDetail from './screens/ProductDetail';
import ButtonTab from './components/BottomTab';
import Cart from './screens/Cart';
import Delivery from './screens/Delivery';
import Payment from './screens/Payment';
import EditProfile from './screens/EditProfile';
import History from './screens/History';
import SplashScreen from './screens/SplashScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonTab {...props} />}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="person"
        component={Profile}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
};
const myDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        component={HomeTabs}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};
const Router = () => {
  const token = useSelector(state => state.auth.token);
  // console.log('INI TOKEN LOHH YA: ', token);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {token === null ? (
          <>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
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
          </>
        ) : (
          <>
            <Stack.Screen
              name="myDrawer"
              component={myDrawer}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
          </>
        )}
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="Delivery"
          component={Delivery}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: false, tabBarBadge: 3 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
