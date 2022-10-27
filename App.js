import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../HealthApp/src/components/Main/Main';
import Login from '../HealthApp/src/components/Authentication/Login';
//import Logout from '../HealthApp/src/components/Authentication/Logout';
//simport ForgotPass from '../HealthApp/src/components/Authentication/ForgotPass';
import Page from './src/components/Main/Page/Page';
import Home from './src/components/Main/Page/Home/Home';
import Register from '../HealthApp/src/components/Authentication/Register';
import EditAccount from './src/components/Main/Page/Account/EditAccount';
import ChangePassword from './src/components/Main/Page/Account/ChangePassword';
import Chat from './src/components/Main/Page/Chat/Chat';
import DetailMediSick from './src/components/Main/Page/MedicineSick/DetailMediSick';
import DetailAccount from './src/components/Main/Page/Account/DetailAccount';
import HomeAd from './src/components/Main/PageAd/HomeAd/HomeAd';
import AccountAd from './src/components/Main/PageAd/AccountAd/AccountAd';
import EditAccountAd from './src/components/Main/PageAd/AccountAd/EditAccountAd';
import DetailPost from './src/components/Main/Page/Post/DetailPost';

const Stack = createNativeStackNavigator();
// const Dra= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Dra.Navigator drawerContent={props => <Drawer {...props} />}>
       <Dra.Screen name='Home' component={Home} />
      </Dra.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        {/* --------------------Co ban---------------------- */}
        {/* <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        {/* -------------Nguoi dung------------ */}
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailAccount"
          component={DetailAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAccount"
          component={EditAccount}
          options={{ headerShown: false }}
        />
        {/* ----------- */}
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        {/* ----------- */}

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* ----------- */}
        <Stack.Screen
          name="DetailMediSick"
          component={DetailMediSick}
          options={{ headerShown: false }}
        />
        {/* ----------- */}

        <Stack.Screen
          name="DetailPost"
          component={DetailPost}
          options={{ headerShown: false }}
        />
        {/* ----------- */}

        {/* ----------- */}

        {/* ----------- */}

        {/* ----------- */}
        <Stack.Screen
          name="Page"
          component={Page}
          options={{ headerShown: false }}
        />
        {/* --------------Nhan vien---------------- */}
        <Stack.Screen
          name="AccountAd"
          component={AccountAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAccountAd"
          component={EditAccountAd}
          options={{ headerShown: false }}
        />
        {/* ----------- */}
        <Stack.Screen
          name="HomeAd"
          component={HomeAd}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
