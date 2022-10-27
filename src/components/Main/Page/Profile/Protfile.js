import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
import image11 from '../../../../images/image11.png';
//import image22 from '../../../../images/image22.png';
import lich from '../../../../images/lich.png';
import mess from '../../../../images/mess.png';
import info from '../../../../images/info.png';
import profile from '../../../../images/profile.png';
//import medi1 from '../../../../images/medi1.png';

const array = [
  {
    id: 1,
    imageName: lich,
  },
  {
    id: 2,
    imageName: mess,
  },
  {
    id: 3,
    imageName: info,
  },
  {
    id: 4,
    imageName: profile,
  },
];

const Home = ({ navigation }) => {
  const [dataArray] = useState(array);
  const gotoScreen = (id) => {
    if (id === 1) navigation.navigate('Login');
    if (id === 2) navigation.navigate('Register');
    if (id === 3) navigation.navigate('HomeAd');
  };
  return (
    <View style={styles.container}>
      <View style={styles.oncontainer}>
        <Image
          source={image11}
          style={{
            height: 10,
            width: 20,
            marginTop: 50,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('EditAccount')}>
          <Icon
            name="account-circle"
            size={30}
            color="#fff"
            style={{ marginLeft: 280 }}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              fontSize: 22,
              color: '#FFF',
              fontWeight: 'bold',
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
            }}
          >
            CHỈ SỐ CÁ NHÂN
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#111',
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 18,
            borderRadius: 15,
            paddingVertical: 0,
          }}
        >
          Công cụ
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: -40, marginTop: 30 }}
        >
          {dataArray.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => gotoScreen(item.id)}
              style={styles.toucharicon}
            >
              <Image
                source={item.imageName}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 20,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#111',
              }}
            >
              Cập nhật chỉ số
            </Text>
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <View
              style={{
                backgroundColor: '#007acc',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#FFF',
                }}
              >
                Thống kê
              </Text>
            </View>
          </View>
        </View>
        {/* form */}
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.form}>
            <View style={styles.row}>
              <Text style={styles.textName}>BMI</Text>
              <TextInput style={styles.textinput} />
              <Text>...</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text>Đường huyết</Text>
              <TextInput
                style={{
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                  width: 100,
                }}
              />
              <Text>mg/dl</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Huyết áp</Text>
              <TextInput style={styles.textinput} />
              <Text>mmHg</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Cholesterol</Text>
              <TextInput style={styles.textinput} />
              <Text>mg/dl</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Nhịp tim</Text>
              <TextInput style={styles.textinput} />
              <Text>bpm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Chiều cao</Text>
              <TextInput style={styles.textinput} />
              <Text>cm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Cân nặng</Text>
              <TextInput style={styles.textinput} />
              <Text>kg</Text>
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
              <Text style={styles.panelButton}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* hEEEEEEEE */}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5DCE0',
    flex: 1,
  },
  oncontainer: {
    backgroundColor: '#E37485',
    height: '20%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },

  toucharicon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    marginHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#E37485',
  },
  form: {
    borderWidth: 1,
    borderColor: '#E37485',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textinput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 100,
    textAlign: 'center',
    keyboardType: 'decimal',
  },
  textName: {
    width: 80,
  },
  panelButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#007acc',
    alignItems: 'center',
    marginVertical: 7,
    color: '#fff',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5DCE0',
    alignItems: 'center',
    marginTop: 10,
  },
});
