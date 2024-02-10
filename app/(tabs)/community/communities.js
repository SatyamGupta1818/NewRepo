import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const communities = () => {
  return (
    <View>
      <Link replace href='app/(tabs)/community/index' >
      Go back to communities
      </Link>
    </View>
  )
}

export default communities

const styles = StyleSheet.create({})