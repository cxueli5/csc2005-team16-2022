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




export const HelpScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

  return (
    <View style={styles.container}>
      <Text style>FAQ: https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Health-Enrichment-Centre/Pages/default.aspx</Text>
      <Text></Text>
      <Text style = {{ fontWeight:'bold' , fontSize:18 }}>Contact</Text> 
      <Text style = {{ fontWeight:'bold'}}>(Hospital Admin)</Text>
      <Text>Tel : 6357 2233 | 8357 2235</Text> 
      <Text>Email : HEC@ttsh.com.sg</Text>
      <Text style = {{ fontWeight:'bold'}}>(IT Support Admin)</Text>
      <Text>Tel : 6456 2233 | 9077 2235</Text> 
      <Text>Email : ITSupport@ttsh.com.sg</Text>
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
