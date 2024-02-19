import { registerRootComponent } from 'expo'
import { AppRegistry, Platform } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

if (Platform.OS == 'android') {
  registerRootComponent(App)
} else {
  AppRegistry.registerComponent(appName, () => App)
}
