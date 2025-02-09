import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext'; // Import AuthContext
import AppNavigator from './src/navigation/AppNavigator'; // Import AppNavigator

const App = () => {
  return (
    <AuthProvider>  {/* Wrapping the navigation with the AuthProvider */}
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
