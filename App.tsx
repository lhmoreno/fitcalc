import AppLoading from 'expo-app-loading'
import { StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts, JetBrainsMono_700Bold, JetBrainsMono_800ExtraBold } from '@expo-google-fonts/jetbrains-mono'
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Ionicons } from '@expo/vector-icons'

import { Foods } from './src/screens/Foods'
import { Calculator } from './src/screens/Calculator'

const Tab = createBottomTabNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono_800ExtraBold,
    JetBrainsMono_700Bold,
    Poppins_400Regular,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.logoTitle}>Fitcalc</Text>

        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#50B22D',
            tabBarStyle: {
              height: 64,
              paddingTop: 4,
              paddingBottom: 4
            },
            tabBarLabelStyle: {
              fontFamily: 'Poppins_400Regular',
              fontSize: 16
            }
          }}
        >
          <Tab.Screen 
            name="Foods" 
            component={Foods}
            options={{
              title: 'Alimentos',
              tabBarIcon: ({color, size}) => <Ionicons name="fast-food-outline" color={color} size={size} />
            }} 
          />

          <Tab.Screen 
            name="Calculator" 
            component={Calculator} 
            options={{
              title: 'Calculadora',
              tabBarIcon: ({color, size}) => <Ionicons name="calculator-outline" color={color} size={size} />
            }} 
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoTitle: {
    marginTop: 16,
    marginBottom: 16,
    fontFamily: 'JetBrainsMono_700Bold',
    fontSize: 24,
    color: '#50B22D',
    textAlign: 'center'
  }
})