import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-web';

import { Button, Settings, StyleSheet, View } from 'react-native';
import { Colors,auth } from '../config';
import { signOut } from 'firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { NavigationContainer } from '@react-navigation/native';


//import { HomeScreen } from '../screens';
import { HomeScreen } from '../screens';
import { CalendarScreen } from '../screens/CalendarScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { PatientSearchScreen } from '../screens/PatientSearchScreen';
import { ScopeSearchScreen } from '../screens/ScopeSearchScreen';
import { WasherScreen} from '../screens/WasherScreen';
import { LoginScreen} from '../screens';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { ForgotPasswordScreen } from '../screens';
import { passwordResetSchema } from '../utils';
import { ProfileForgotPasswordScreen } from '../screens/ProfileForgotPasswordScreen';
import { AnnouncementScreen } from '../screens/AnnouncementScreen';
import { SettingScreen } from '../screens/SettingScreen';
import { HelpScreen } from '../screens/HelpScreen';
import { AboutScreen } from '../screens/AboutScreen';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { Menu } from 'react-native-paper';
import { BarCodeScannerScreen } from '../screens/BarCodeScannerScreen';

// screen name 
const homeName = " Home "
const scheduleName = " Calendar "
const trackingName = " Search "
const washerName = " Washer "
const profileName = " Profile "

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const TrackingStack = createStackNavigator();
const WasherStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();

function TabScreen() {
  return(
    <Tab.Navigator
                initialRouteName={homeName}
                
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === scheduleName){
                            iconName = focused? 'calendar' : 'calendar-outline';
                        } else if (rn === trackingName){
                            iconName = focused? 'search' : 'search-outline';
                        }else if (rn === washerName){
                            iconName = focused? 'water' : 'water-outline';
                        }else if (rn === profileName){
                            iconName = focused? 'person-circle' : 'person-circle-outline';
                        }
                        
                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>

                    },
                })}
                >
                <Tab.Screen name={homeName} component= {HomeStackScreen} />
                <Tab.Screen name={scheduleName} component={CalendarStackScreen} />
                <Tab.Screen name ={trackingName} component={SearchStackScreen}/>
                <Tab.Screen name ={washerName} component={WasherStackScreen}/>
                <Tab.Screen name ={profileName} component={ProfileStackScreen}/>
               </Tab.Navigator>
  )
}

const MenuBar = ({navigation}) => {
  return(
    <TouchableHighlight underlayColor={'#DDD'} style={{marginRight: 10, borderRadius: 10}} onPress = {()=> navigation.openDrawer()}>
        <Ionicons name='ios-menu' size={40} color={'#000'}></Ionicons>
        </TouchableHighlight>
  )
}

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
    screenOptions={{
    }}
    >
     <HomeStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Home" component={ HomeScreen } />  
     <HomeStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Announcement" component={ AnnouncementScreen } />       
    </HomeStack.Navigator>
   );
 }

 const CalendarStackScreen = ({navigation}) => {
  return (
    <ScheduleStack.Navigator
    screenOptions={{
    }}
    >
     <ScheduleStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Calendar" component={ CalendarScreen } />        
    </ScheduleStack.Navigator>
   );
 }

const SearchStackScreen = ({navigation}) => {
  return (
    <TrackingStack.Navigator
    screenOptions={{
    }}
    >
     <TrackingStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Search" component={ SearchScreen } />
     <TrackingStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="PatientSearch" component={ PatientSearchScreen } />        
     <TrackingStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="ScopeSearch" component={ ScopeSearchScreen } />                
    </TrackingStack.Navigator>
   );
 }

const WasherStackScreen = ({navigation}) => {
  return (
    <WasherStack.Navigator
    screenOptions={{
    }}
    >
     <WasherStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Washer" component={ WasherScreen } />
     <WasherStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Barcode Scanner" component={ BarCodeScannerScreen } />        
    </WasherStack.Navigator>
   );
 }

const ProfileStackScreen= ({navigation}) => {
  return (
    <ProfileStack.Navigator
    screenOptions={{
    }}
    >
     <ProfileStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Profile" component={ ProfileScreen } />
     <ProfileStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Change Password" component={ ChangePasswordScreen } />
     <ProfileStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Forgot Password" component={ ProfileForgotPasswordScreen } />        
    </ProfileStack.Navigator>
   );
 }

 const SettingStackScreen = ({navigation}) => {
  return (
    <SettingStack.Navigator
    screenOptions={{
    }}
    >
     <SettingStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Setting" component={ SettingScreen } />     
    </SettingStack.Navigator>
   );
 }

 const AboutStackScreen = ({navigation}) => {
  return (
    <SettingStack.Navigator
    screenOptions={{
    }}
    >
     <SettingStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="About" component={ AboutScreen } />     
    </SettingStack.Navigator>
   );
 }
 const HelpStackScreen = ({navigation}) => {
  return (
    <SettingStack.Navigator
    screenOptions={{
    }}
    >
     <SettingStack.Screen options={{
      headerRight: () => (
        <MenuBar navigation={navigation}/>
      ),
     }} name="Help" component={ HelpScreen } />     
    </SettingStack.Navigator>
   );
 }

 const Drawer = createDrawerNavigator();

 

export const AppStack = () => {
  //Error Handling after Log In
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    <Drawer.Navigator initialRouteName="tabScreen" drawerPosition = "right"
     screenOptions={({route}) => ({
      drawerPosition: 'right',
      headerShown: false,
      drawerStyle :{
        width: 150,
        height: 280,
        borderRadius: 25,
        paddingTop:10,
      }
      
  })}>
        <Drawer.Screen name="Home " component={TabScreen} />
        <Drawer.Screen name= "Setting " component={SettingStackScreen}/>
        <Drawer.Screen name="About " component={AboutStackScreen}/>
        <Drawer.Screen name="Help " component={HelpStackScreen}/>
      </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "Colors.white",
    paddingHorizontal: 12,
  },
});