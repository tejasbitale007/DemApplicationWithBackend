import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './components/modules/LoginScreen/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <LoginScreen />
      </View>
    </NavigationContainer>
  )
}

export default App