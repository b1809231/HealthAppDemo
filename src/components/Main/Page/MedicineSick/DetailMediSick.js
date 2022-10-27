import React from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
//import image11 from '../../../../images/image11.png';
//import image22 from '../../../../images/image22.png';
import back from '../../../../images/back.png';
import medi2 from '../../../../images/medi2.png';

// import { TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const DetailMediSick = ({ navigation }) => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.above}>
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

      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        Thông tin chi tiết
      </Text>

      <Image
        source={medi2}
        style={{
          height: 150,
          width: 150,
          alignSelf: 'center',
        }}
      />
    </View>
    <View style={styles.below}>
      <View
        style={{
          width,
          alignItems: 'center',
          //backgroundColor: '#333',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          Tên sản phẩm
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#a4a4a9',
          }}
        >
          Loại
        </Text>
      </View>
    </View>
    <TouchableOpacity>
      <View style={styles.tochaphone}>
        <Icon name="phone" size={24} color="#FFF" />
      </View>
    </TouchableOpacity>
  </ScrollView>
);
export default DetailMediSick;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: '#fff',
  },
  above: {
    height: height * 0.3,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },

  below: {
    backgroundColor: '#F5DCE0',
    //   borderTopLeftRadius: 20,
    //   borderTopRightRadius: 20,
    flexDirection: 'row',
    width,
    height,
  },
  touchaphone: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 50,
    width: 50,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
  },
});
