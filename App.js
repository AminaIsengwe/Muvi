import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Splash from './screens/splash';
import Start from './screens/get-started';
import Watch from './screens/watch-movie';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './screens/signup';
import SignIn from './screens/signin';
import Home from './screens/home';
import Profile from './screens/profile';
import Bottom_nav from './screens/bottom_nav';
import Search from './screens/Search';``
import Mylist from './screens/mylist';
import { Icon, ThemeContext } from 'react-native-elements';
import Action from './screens/Action';
import { RawButton } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen from './screens/DrawerScreen';
import ThemeProvider from './screens/context/themecontext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
              {/* <Stack.Navigator initialRouteName='Splash'> */}
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
            component={TabNavigator}
            options={{headerShown:false}}
          />
           <Stack.Screen
            name="Action"
            component={Action}
            options={{
              // headerBackTitle: "Register",
              headerStyle: {
                backgroundColor: '#1F2123',
              },  
              headerTintColor:'white',
            }}
            
          />
        {/* </Stack.Navigator> */}
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator  screenOptions={{tabBarStyle:{backgroundColor:'#1F2123',borderTopColor: '#1F2123'}}}>
      <Tab.Screen name='Home' component={Home}  options={{ 
        headerShown: false,
        tabBarIcon:()=>
        <Icon name='home' color='white'/>   
      }} />
      <Tab.Screen name='Search' component={Search}  options={{ 
        headerShown: false,         
        tabBarIcon:()=>
        <Icon name='search'color='white'/> }}/>
    <Tab.Screen name='Mylist' component={Mylist}  options={{ 
      headerShown: false, 
       tabBarIcon:()=>
      <Icon name='folder-outline' type="material-community" color='white'/> 
      }}/>
    <Tab.Screen name='Profile' component={Drawernavigation} options={{ 
      headerShown: false,
      tabBarIcon:()=>
      <Icon name='person-outline' color='white' /> 
      }} />
    </Tab.Navigator>
  );
}
export function Drawernavigation() {
  
  return (
     
        <Drawer.Navigator >
          <Drawer.Screen name="Profile1" component={Profile} 
          options={{headerShown:false}}
          
          />
           <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
        </Drawer.Navigator>
     
    );
  }

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
         <StackNav/>
  </NavigationContainer>
  </ThemeProvider>
  );
}

