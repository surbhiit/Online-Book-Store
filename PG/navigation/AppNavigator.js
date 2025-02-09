import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthSelectionScreen from '../screens/AuthSelectionScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ChooseTopicScreen from '../screens/ChooseTopicScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import { AuthContext } from '../context/AuthContext';
import ReminderScreen from '../screens/ReminderScreen';
import HomeScreen from '../screens/HomeScreen';
import MeditateScreen from '../screens/MeditateScreen';
import MusicScreen from '../screens/MusicScreen';
import SleepScreen from '../screens/SleepScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BasicsScreen from '../screens/BasicsScreen';
import RelaxationScreen from '../screens/RelaxationScreen';
import FocusScreen from '../screens/FocusScreen';
import HappinessScreen from '../screens/HappinessScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);  // Use the context to access login status

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isLoggedIn ? 'HomeScreen' : 'AuthSelection'}>
      <Stack.Screen name="AuthSelection" component={AuthSelectionScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="ChooseTopic" component={ChooseTopicScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      <Stack.Screen name="ReminderScreen" component={ReminderScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MeditateScreen" component={MeditateScreen} />
      <Stack.Screen name="MusicScreen" component={MusicScreen} />
      <Stack.Screen name="SleepScreen" component={SleepScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="BasicsScreen" component={BasicsScreen} />
      <Stack.Screen name="RelaxationScreen" component={RelaxationScreen} />
      <Stack.Screen name="FocusScreen" component={FocusScreen} />
      <Stack.Screen name="HappinessScreen" component={HappinessScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
