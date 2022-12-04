import React, {useState, useRef} from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, Image, Modal} from 'react-native';
import { signOut } from 'firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';

import { Images, Colors, auth } from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-web';
import { connect } from 'formik';
import Animated from 'react-native-reanimated';
import { Logo, Button } from '../components';
import { SelectList } from 'react-native-dropdown-select-list';


export const SettingScreen = ({navigation}) => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  const handleChangePw = () => {    
    return navigation.navigate('Change Password');
  };
  const myUserId = auth.currentUser.email;
  var shrtUserId = myUserId.replace('@ttsh.com.sg','');
  const [selected, setSelected]=React.useState("");
  const data = [
    {key:'1',value:'ENG'},
    {key:'2',value:'MAL'},
    {key:'3',value:'CHI'},
    {key:'4',value:'TML'}
  ]

  const data2 = [
    {key:'1',value:'On'},
    {key:'2',value:'Off'}
  ]

  return (
    <View style={styles.container}>
      <Text></Text>
      <SelectList style={styles.selectlist}
        setSelected={(val)=>setSelected(val)}
        data={data}
        save="value"
        placeholder='Select Language'/>
      <Text></Text>

      <SelectList style={styles.selectlist}
        setSelected={(val)=>setSelected(val)}
        data={data2}
        save="value"
        placeholder='Notifications'/>

      <Text></Text>

      <Text style = {{ fontWeight:'bold', fontSize: 18}}>Account</Text>

      <View style={styles.logoContainer}>
          <Logo uri={Images.logo}/>
          <Text style={styles.screenTitle}>{shrtUserId}</Text>            
      </View>

      <Button style={styles.borderlessButtonContainer} onPress={handleChangePw}>
      <Text style={styles.buttonlessText}>Change Password</Text>
      </Button>

      <Button style={styles.button} onPress={handleLogout}>      
      <Text style={styles.buttonText}>Log out</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "space-between",
    padding: 20,
    margin: 5,
  },
  logoContainer: {
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.black,
    paddingTop: 20
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: "#49a0ae",
    padding: 10,
    borderRadius: 30
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700'
  },
  buttonlessText: {
    fontSize: 20,
    color: Colors.blue,
    fontWeight: '700'
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectlist:{
    fontweight:'bold',
    padding: 10,
    borderRadius: 30
  }
});

