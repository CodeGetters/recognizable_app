import React from 'react';
import {ScrollView, View} from 'react-native';

import {Button} from '@rneui/themed';

function App({navigation}: any): JSX.Element {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button
            title={'打开摄像头'}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={() => navigation.push('test')}
            buttonStyle={{
              backgroundColor: 'rgba(90, 154, 230, 1)',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default App;
