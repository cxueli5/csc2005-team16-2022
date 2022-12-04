import React, {useState, useRef} from 'react';
import { View, StyleSheet, Button , Text, SafeAreaView, FlatList, Image, Modal} from 'react-native';
import { signOut } from 'firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';

import { auth } from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-web';
import { connect } from 'formik';
import Animated from 'react-native-reanimated';




export const AboutScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

  return (
    <View style={styles.container}>
      <Text style = {{ fontWeight:'bold', fontSize: 18}}>About this App</Text>
      <Text>This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.</Text>
      <Text>We use your Personal Information only for providing and improving the Site.</Text>
      <Text>By using the Site, you agree to the collection and use of information in accordance with this policy.</Text>
      <Text></Text>
      <Text style = {{ fontWeight:'bold', fontSize: 18}}>Log Data</Text>
      <Text>Like many site operators, we collect information that your browser sends whenever you visit our Site.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "space-between",
    padding: 20,
    margin: 5,
  }
});
