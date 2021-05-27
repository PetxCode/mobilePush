import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

export default function PostImage() {
  const [response, setResponse] = React.useState(null);

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: 'red',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: '#651d32',
            width: 350,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              response => {
                setResponse(response);
              },
            )
          }>
          <Text
            style={{
              color: 'white',
              textTransform: 'uppercase',
            }}>
            Select An Image
          </Text>
        </TouchableOpacity>

        <View style={styles.response}></View>

        {response ? (
          <View style={styles.image}>
            <Image
              style={{width: 280, height: 200, borderRadius: 5}}
              source={{uri: response.uri}}
              // source={response}
            />
          </View>
        ) : (
          <View style={styles.image}>
            <Image
              style={{width: 280, height: 200, borderRadius: 5}}
              // source={{uri: response.uri}}
              source={require('../../asset/dom.png')}
            />
          </View>
        )}
        {response ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 200,
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={() => {
              setResponse(null);
            }}>
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#fff',
                textTransform: 'uppercase',
              }}>
              Remove
            </Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    marginVertical: 10,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
