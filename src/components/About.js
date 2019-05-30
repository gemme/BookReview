import React from 'react'

import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default ({navigation}) => {

    return (
      <ScrollView
        style={{
          flex: 1,
          padding: 40
        }}
      >

        <Text style={styles.header}>
          About Book Review
        </Text>

        <Icon
          name="book-open"
          color="black"
          size={100}
          style={styles.icon}
        />

        <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo, mauris nec fringilla sagittis, magna augue vulputate magna, id volutpat nisi tortor vel diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut massa lorem, lobortis vel sollicitudin sit amet, rutrum sed tortor. In risus magna, semper in mi sed, pellentesque placerat lectus. Suspendisse et luctus leo. Praesent sed turpis elementum, laoreet augue a, rutrum justo. Nullam accumsan convallis nunc, quis maximus nulla commodo in. Fusce sed mollis metus. Aenean eu neque nulla.
        </Text>
        <View style={{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: '100%'
        }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.navigate('CameraApp');
            }}>
            <Text style={{
              textAlign: 'center'
            }}>Take a Photo</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginTop: 20
  },
  button: {
    flex:1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2
  }
})
