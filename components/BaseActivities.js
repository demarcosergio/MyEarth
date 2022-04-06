
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import getActivities from './activities'
import Detail from './Detail'

const Stack = createStackNavigator()

function BaseActivities() {
  return (
      <Stack.Navigator
        initialRouteName='getActivities'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: 'white',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='getActivities'
          component={getActivities}
          options={{ title: 'myEarth Activities' }}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={({ route }) => ({
            title: 'Activities'
          })}
        />
        
      </Stack.Navigator>
  )
}

export default BaseActivities