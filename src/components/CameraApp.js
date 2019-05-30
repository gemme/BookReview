'use strict';
import React, { useRef } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import axios from 'axios';


const CameraApp = ({navigation}) => {
  const refContainer = useRef(null);
  return (
      <View style={styles.container}>
        <RNCamera
          ref={refContainer}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => takePicture(refContainer)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Go Back </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

async function takePicture (refContainer) {
  if (refContainer.current) {
    const options = { quality: 0.5, base64: true };
    const data = await refContainer.current.takePictureAsync(options);
    console.log(data);
    const formData = new FormData();
    formData.append('avatar', {
      uri: data.uri,
      type: 'file',
      name: 'gemme.jpg',
    });
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
  }
    axios.post(
      'https://bookreviews-api.herokuapp.com/api/Containers/photos/upload',
      formData,
      config
    )
      .then(response => console.log('response::image::sent', response))
      .catch(err => console.log('not sent'));

  }
};

export default CameraApp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});