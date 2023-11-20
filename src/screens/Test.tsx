import React, {Component} from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';

class CameraScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RNCamera
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          captureAudio={false}
        />
      </View>
    );
  }
}

export default CameraScreen;
