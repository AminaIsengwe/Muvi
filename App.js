import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Splash from './screens/splash';
import Start from './screens/get-started';
import Watch from './screens/watch-movie';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './screens/signup';
import SignIn from './screens/signin';
import Home from './screens/home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown:false}}
        />
          <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown:false}}
        />
          <Stack.Screen
          name="Watch"
          component={Watch}
          options={{headerShown:false}}
        />
          <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            // headerBackTitle: "Register",
            headerStyle: {
              backgroundColor: '#1F2123',
            },
            
            headerTintColor:'white',
          }}
        />
          <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            // headerBackTitle: "Register",
            headerStyle: {
              backgroundColor: '#1F2123',
            },  
            headerTintColor:'white',
          }}
        />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />

      </Stack.Navigator>
  </NavigationContainer>
  );
}

