import React from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
import logout from '../../../../images/logout.png';
//import anh from '../../../../images/anh.png';
import calender from '../../../../images/calender.png';
import list from '../../../../images/list.png';
import messange from '../../../../images/messange.png';
import account from '../../../../images/account.png';
// import { TextInput } from 'react-native-gesture-handler';

const HomeAd = ({ navigation }) => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.above}>
      <View style={styles.onabove}>
        <View
          style={{
            width: '50%',
          }}
        >
          <TouchableOpacity>
            <Image
              source={logout}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '50%',
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity>
            <Icon
              name="account-circle"
              size={30}
              color="#fff"
              style={{
                marginRight: -2,
                marginTop: 7,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={list} style={styles.imagepage} />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          alignItems: 'center',
          alignSelf: 'center',
          color: '#fff',
        }}
      >
        WELCOME
      </Text>
    </View>
    <View style={styles.below}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailMediSick')}
        style={styles.touchaaction}
      >
        <Image source={messange} style={{ width: 40, height: 40 }} />
        <View>
          <Text
            style={styles.texttouchaaction}
          >
            Tin nhắn
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchaaction}
      >
        <Image source={calender} style={{ width: 40, height: 40 }} />
        <View>
          <Text
            style={styles.texttouchaaction}
          >
            Lịch hẹn
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchaaction}
      >
        <Image source={list} style={{ width: 40, height: 40 }} />
        <View>
          <Text
            style={styles.texttouchaaction}
          >
            Danh sách khách hàng
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AccountAd')}
        style={styles.touchaaction}
      >
        <Image source={account} style={{ width: 40, height: 40 }} />
        <View>
          <Text style={styles.texttouchaaction}>Quản lý tài khoản</Text>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
export default HomeAd;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  above: {
    height: 250,
    width: '100%',
    paddingHorizontal: 35,
  },
  onabove: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 40,
    alignItems: 'center',
  },
  imagepage: {
    width: 100,
    height: 100,
    borderRadius: 80,
    borderColor: '#fff',
    alignSelf: 'center',
    //borderColor: '#fff',
    borderWidth: 2,
  },
  below: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 600,
    paddingHorizontal: 30,
  },
  touchaaction: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: -10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  texttouchaaction: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170,
  },
});
