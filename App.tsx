import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import theme from './src/themes'
import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routes'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" />
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
