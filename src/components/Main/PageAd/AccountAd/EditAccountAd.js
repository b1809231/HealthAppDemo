import React, { useState } from 'react';
//import { View, SafeAreaView, StyleSheet, Platform } from 'react-native';
//import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
//import Animated from 'react-native-reanimated';
//import { BottomSheet } from 'react-native-elements';
//import BottomSheet from 'react-native-sheet';

const EditAccountAd = () => {
  const { colors } = useTheme();
  const { avatar, iconCamera } = styles;

  const [pickedImagePath, setPickedImagePath] = useState(
    'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419'
  );
  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Cho phép truy cập vào hình ảnh của bạn!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: 'center', marginTop: 40, paddingHorizontal: 20 }}
      >
        <View>
          {pickedImagePath !== '' && (
            <Image
              source={{ uri: pickedImagePath }}
              resizeMode="contain"
              style={avatar}
            />
          )}
          <TouchableOpacity style={iconCamera} onPress={showImagePicker}>
            <Icon type="feather" name="camera" size={20} color="#A9A9A9" />
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
          Giao Doan
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Họ và tên"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="intersex" color={colors.text} size={20} />
          <TextInput
            placeholder="Giới tính"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="calendar" color={colors.text} size={20} />
          <TextInput
            placeholder="Ngày sinh"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="map-marker" color={colors.text} size={20} />
          <TextInput
            placeholder="Địa chỉ"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Số điện thoại"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
        <Text style={styles.panelButton}>Chỉnh sửa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditAccountAd;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DCE0',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5DCE0',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  avatar: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCamera: {
    position: 'absolute',
    color: '#A9A9A9',
    bottom: 0,
    right: 5,
  },
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    textShadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000000',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    //marginTop: platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
