import React from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
import image11 from '../../../../images/image11.png';
import image22 from '../../../../images/image22.png';
import medi1 from '../../../../images/medi1.png';
import medi2 from '../../../../images/medi2.png';
// import { TextInput } from 'react-native-gesture-handler';

const MedicineSick = ({ navigation }) => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.above}>
      <View style={styles.onabove}>
        <View
          style={{
            width: '50%',
          }}
        >
          <Image
            source={image11}
            style={{
              height: 10,
              width: 20,
            }}
          />
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

      <Text
        style={{
          fontWeight: 'Bold',
          fontSize: 20,
          color: '#FFF',
          paddingVertical: 10,
        }}
      >
        Tìm thông tin:
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderColor: '#fff',
          borderRadius: 20,
          borderWidth: 0.5,
          paddingVertical: 5,
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder="Nhập nội dung cần tìm"
          style={{
            paddingHorizontal: 20,
            fontWeight: 'Medium',
            fontSize: 14,
            width: '90%',
            color: '#fff',
          }}
        />
        <Image source={image22} style={{ height: 20, width: 20 }} />
      </View>
    </View>
    <View style={styles.below}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailMediSick')}
        style={styles.touchaproduct}
      >
        <Image source={medi1} style={{ width: 40, height: 40 }} />
        <View>
          <Text
            style={{
              color: '#345c74',
              fontWeight: 'bold',
              fontSize: 13,
              paddingHorizontal: 20,
              width: 170,
            }}
          >
            Thuốc đóng chai
          </Text>
          <Text
            style={{
              color: '#f58084',
              fontWeight: 'bold',
              fontSize: 12,
              paddingHorizontal: 20,
            }}
          >
            Thuộc loại
          </Text>
        </View>
        <Text style={styles.textproductdetail}>Chi tiết</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchaproduct}>
        <Image source={medi2} style={{ width: 40, height: 40 }} />
        <View>
          <Text style={styles.textproduct}>Thuốc đóng hộp</Text>
          <Text
            style={{
              color: '#f58084',
              fontWeight: 'bold',
              fontSize: 12,
              paddingHorizontal: 20,
            }}
          >
            Thuộc loại
          </Text>
        </View>
        <Text style={styles.textproductdetail}>Chi tiết</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
export default MedicineSick;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  above: {
    height: 200,
    width: '100%',
    paddingHorizontal: 35,
  },
  onabove: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  below: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 800,
    paddingHorizontal: 30,
  },
  touchaproduct: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: -10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  textproduct: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170,
  },
  textproductdetail: {
    color: '#2D71B8',
    fontWeight: 'bold',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
