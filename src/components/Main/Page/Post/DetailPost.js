import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
//import back from '../../../../images/back.png';
import info from '../../../../images/info.png';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const DetailPost = () => (
  <Swiper
    buttonWrapperStyle={styles.swiper}
    style={styles.wrapper}
    showsButtons
    paginationStyle={{
      marginRight: w * 0.7,
      marginBottom: h * 0.02,
    }}
    activeDotColor="#8A56AC"
    dotColor="#E37485"
    nextButton={
      <View style={styles.netbutton}>
        <AntDesign name="arrowright" size={22} color="#FFF" />
      </View>
    }
    prevButton={
      <View style={styles.prebutton}>
        <AntDesign name="arrowleft" size={22} color="#FFF" />
      </View>
    }
  >
    <View style={styles.slide}>
      <Image source={info} style={styles.img} />
      <Text style={styles.title}>Bài viết 1</Text>
      <Text style={styles.text}>Mất khoảng 5 năm để làm luận văn .</Text>
    </View>
    <View style={styles.slide}>
      <Image source={info} style={styles.img} />
      <Text style={styles.title}>Bài viết 2</Text>
      <Text style={styles.text}>Mất khoảng 5 năm để làm luận văn .</Text>
    </View>

    <View style={styles.slide}>
      <Image source={info} style={styles.img} />
      <Text style={styles.title}>Bài viết 3</Text>
      <Text style={styles.text}>Mất khoảng 5 năm để làm luận văn .</Text>
    </View>
    <View style={styles.slide}>
      <Image source={info} style={styles.img} />
      <Text style={styles.title}>Bài viết 4</Text>
      <Text style={styles.text}>Mất khoảng 5 năm để làm luận văn .</Text>
    </View>
  </Swiper>
);

export default DetailPost;

const styles = StyleSheet.create({
  swiper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  netbutton: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: '#E37485',
  },
  prebutton: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: '#E37485',
    marginHorizontal: 20,
  },
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
    //backgroundColor: 'F5DCE0'
  },
  img: {
    alignSelf: 'center',
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.4,
    width: w * 0.8,
    borderColor: '#111',
    borderWidth: 1,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: '#767676',
    fontFamily: 'Montserrat_400Regular',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
});
