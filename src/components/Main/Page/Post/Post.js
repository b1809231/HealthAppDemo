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
        Tìm bài viết:
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
          placeholder="Nhập tên bài viết"
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
        onPress={() => navigation.navigate('DetailPost')}
        style={styles.touchaproduct}
      >
        <Image source={medi1} style={{ width: 60, height: 60 }} />
        <View>
          <Text
            style={styles.textproduct}
          >
            Tên bài viết
          </Text>
          <Text
            style={styles.textproducttitle}
          >
            Tiêu đề
          </Text>
        </View>
        <Text style={styles.textproductdetail}>Chi tiết</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchaproduct}>
        <Image source={medi2} style={{ width: 60, height: 60 }} />
        <View>
          <Text style={styles.textproduct}>Tên bài viết</Text>
          <Text
            style={styles.textproducttitle}
          >
            Tiêu đề
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
    height: 160,
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
    paddingHorizontal: 25,
  },
  touchaproduct: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 60,
    marginHorizontal: -10,
    marginVertical: -10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  textproduct: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 10,
    width: 140,
  },
  textproducttitle: {
    
      color: '#2D71B8',
      fontWeight: 'bold',
      fontSize: 14,
      paddingHorizontal: 10,
    
  },
  textproductdetail: {
    color: '#f58084',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
