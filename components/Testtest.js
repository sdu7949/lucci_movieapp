import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const Testtest = () => {
  return (
      <>

    <ViewPager style={styles.viewPager} initialPage={0}>
      <View key="1">
        <Text>First pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst pageFirst page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </ViewPager>
      </>

  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    height : 300,
  },
});

export default Testtest;