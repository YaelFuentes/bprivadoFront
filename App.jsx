import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import http from './src/services/httpService'

export default function App() {
  const [example, changeExample] = useState([])


  useEffect(() => {
     http
      .get('/api/example')
      .then((response) => {
       changeExample(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>{example}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
