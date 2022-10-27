import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home/Home';
import MedicineSick from '../Page/MedicineSick/MedicineSick';
import Profile from '../Page/Profile/Protfile';
import Post from '../Page/Post/Post';
import Account from '../Page/Account/Account';
//import EditAccount from '../Page/Account/EditAccount';
//import Demo from './Demo/demo';

const Tab = createBottomTabNavigator();

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        //initialRouteName='Trang chủ'
        screenOptions={{
          headerShown: false,
          //tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            borderRadius: 10,
            bottom: 20,
            left: 10,
            right: 10,
            elevation: 0,
            backgroundColor: '#ffffff',
            height: 60,
          },
          tabBarActiveTintColor: '#D6202D',
          //tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="DEMO"
          component={Home}
          options={{
            // eslint-disable-next-line no-shadow
            tabBarIcon: ({ color, size }) => (
              <Icon name="phone" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tra cứu"
          component={MedicineSick}
          options={{
            // eslint-disable-next-line no-shadow
            tabBarIcon: ({ color, size }) => (
              <Icon name="info" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Trang chủ"
          component={Profile}
          options={{
            // eslint-disable-next-line no-shadow
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Bài viết"
          component={Post}
          options={{
            // eslint-disable-next-line no-shadow
            tabBarIcon: ({ color, size }) => (
              <Icon name="post-add" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={Account}
          options={{
            // eslint-disable-next-line no-shadow
            tabBarIcon: ({ color, size }) => (
              <Icon name="people" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
