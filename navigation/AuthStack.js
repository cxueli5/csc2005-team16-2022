import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, SignupScreen, ForgotPasswordScreen} from '../screens';
import { CalendarScreen } from '../screens/CalendarScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

import { SearchScreen } from '../screens/SearchScreen';
import { PatientSearchScreen } from '../screens/PatientSearchScreen';
import { ScopeSearchScreen } from '../screens/ScopeSearchScreen';

import { WasherScreen } from '../screens/WasherScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { ProfileForgotPasswordScreen } from '../screens/ProfileForgotPasswordScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
      <Stack.Screen name='Calendar' component={CalendarScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} /> 

      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='PatientSearch' component={PatientSearchScreen} />
      <Stack.Screen name='ScopeSearch' component={ScopeSearchScreen} />

      <Stack.Screen name='Washer' component={WasherScreen} />
      <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} />   
      <Stack.Screen name='ProfileForgot' component={ProfileForgotPasswordScreen} />   
    </Stack.Navigator>
  );
};
