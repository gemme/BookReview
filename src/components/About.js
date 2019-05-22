import React, { Component } from 'react'

import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default () => {

    return (
      <ScrollView style={{ flex: 1, padding: 40 }}>

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
        <Text style={styles.text}>
        Integer rhoncus nulla turpis, nec rutrum risus consequat id. Aliquam a pharetra justo. Aenean congue, orci a dapibus imperdiet, velit ante efficitur elit, nec aliquam felis ligula eget ipsum. Nunc rhoncus faucibus libero non gravida. Aenean nec ultrices ex. Etiam vel diam elementum, faucibus augue id, tristique lorem. Nulla nec lacus ut neque laoreet tempor. Aliquam erat volutpat. Sed gravida suscipit quam, sed scelerisque nulla condimentum nec. Suspendisse quis erat sit amet velit faucibus feugiat. Suspendisse est nibh, tempus nec urna id, rutrum convallis lectus. Proin diam orci, varius vel sollicitudin vel, porttitor ut risus. Cras non metus a nibh maximus commodo. Nulla eleifend erat sed ligula lacinia aliquam.
        </Text>

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
  }
})
