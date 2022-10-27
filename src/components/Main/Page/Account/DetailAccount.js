import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import anh from '../../../../images/anh.png';
import back from '../../../../images/back.png';
// import { TextInput } from 'react-native-gesture-handler';

const DetailAccount = ({ navigation }) => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <View
        style={{
          height: 150,
          width: '100%',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingTop: 40,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: '100%',
            }}
          >
            <Image
              source={back}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.action}>
        <Image source={anh} style={styles.avatar} />
        <Text style={{ fontSize: 25, fontWeight: 'center' }}>Giao Doan</Text>
        <View style={styles.frame}>
          <Icon name="phone" color="#D6202D" size={25} />
          <Text> 0886631033</Text>
        </View>
        <View style={styles.frame}>
          <Icon name="calendar" color="#D6202D" size={25} />
          <Text> 11/08/2000</Text>
        </View>
        <View style={styles.frame}>
          <Icon name="map-marker" color="#D6202D" size={25} />
          <Text> Cần Thơ</Text>
        </View>
        <View style={styles.frame}>
          <Icon name="email" color="#D6202D" size={25} />
          <Text> giaodoan35@gmail.com</Text>
        </View>

        <TouchableOpacity style={styles.botton} onPress={() => navigation.navigate('EditAccount')}>
          <Text>Chỉnh sửa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
export default DetailAccount;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  action: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 620,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -70,
    borderColor: '#fff',
    borderWidth: 5,
  },
  frame: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    paddingBottom: 22,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 20,
  },
  botton: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ff6347',
    width: '90%',
    padding: 20,
    paddingBottom: 22,
    borderRadius: 20,
    shadowOpacity: 8,
    elevation: 15,
    marginTop: 20,
  },
});
