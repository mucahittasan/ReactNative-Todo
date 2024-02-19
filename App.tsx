import { registerRootComponent } from 'expo'
import React from 'react'
import 'react-native-gesture-handler'
import Navigator from './src/'
import AppContainer from './src/components/app-container'

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  )
}

registerRootComponent(App)
