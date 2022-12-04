import React from 'react';
import { Dimensions, View, StyleSheet, Button, Text, SafeAreaView, FlatList, StatusBar, TouchableOpacity, Alert  } from 'react-native';
import { Colors,auth } from '../config'; //Images

import Carousel from 'react-native-reanimated-carousel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { signOut } from 'firebase/auth';

import { getDatabase, ref, query, orderByChild, onValue, child, get, set } from 'firebase/database';

const DATA5 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b6',
    title: 'Schedule has been updated by the Head Nurse. Please check the updated schedule for any relevant information pertaining to your schedule.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f83',
    title: 'Washer G has finished servicing. Activities will resume as per normal. Do take note that the only function that is still under repair is the automative nozzle.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f86',
    title: 'There has been a leak detected with Endoscope A5, please stop any tasks pertaining with the scopes usage. Head nurse has been notified.',
  },
];




//-----------------------------------------------------------------------------------------------------------
  export const AnnouncementScreen = () => {
    //Error Handling after Log In
    const handleLogout = () => {
      signOut(auth).catch(error => console.log('Error logging out: ', error));
      };
    
    const Item = ({ title,content }) => (
      <View style={styles.item}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskTitle}>{content}</Text>
      </View>
      );
      
    const renderItem = ({item}) => (
        <Item title={item.title} content={item.content} />

    );
    

    const myUserId = auth.currentUser.email;
    const db = getDatabase();

    // Specified Carousel Container width 
    const width = Dimensions.get('window').width;
    var shrtUserId = myUserId.replace('@ttsh.com.sg','');
    function SampleFunction(item){
      Alert.alert(item);
    }

  return (
//-----------------------------------------------------------------------------------------------------------
    // Start of Main Body
    <View style={styles.container}>

      <Text>{"\n"}</Text>
      
      {/* FLATLIST testing---------------- */}
      {/* Try FlatList to work on the multiple items inside the carousel https://reactnative.dev/docs/flatlist */}
      <Text style={[styles.defaultText, { fontWeight: 'bold',fontSize: 28 ,}]}>Annoucements:</Text>
      <SafeAreaView style={styles.container}>
      <FlatList
        style={{maxHeight:650,flexGrow:1}}
        data={DATA5}
        renderItem = {renderItem}
      />

      <Text>{"\n"}</Text>
      </SafeAreaView>
    </View>
  );
};

//-----------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    marginTop: StatusBar.currentHeight || 0,
  },
  logoContainer: {
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    paddingTop: 20
  },
  footer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingBottom: 48,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.orange
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: "#49a0ae",
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700'
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#3e99a0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: Colors.white,
  },
  taskTitle: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: '700'
  },
  

});

