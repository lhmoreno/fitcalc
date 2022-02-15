import { View, Text, StyleSheet } from 'react-native'

export function Calculator() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24
  }
})
