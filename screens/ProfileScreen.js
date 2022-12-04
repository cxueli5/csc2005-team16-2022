import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Images, Colors, auth } from '../config';
import { Logo, Button } from '../components';
import { signOut } from 'firebase/auth';
import { getDatabase, ref, query, orderByChild, onValue, child, get, set } from 'firebase/database';

export const ProfileScreen = ({navigation}) => {
  // const handleLogout = () => {
  //   //signOut(auth).catch(error => console.log('Error logging out: ', error));
  //   //navigation.navigate('Login');
  //   //navigation.navigate('LoginScreen');    
  //   return navigation.navigate('Login');
  // };
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  const handleChangePw = () => {    
    return navigation.navigate('Change Password');
  };
  const myUserId = auth.currentUser.email;
  var shrtUserId = myUserId.replace('@ttsh.com.sg','');
  return (
    <View style={styles.container}>
      {/* <Button title='Sign Out' onPress={() => navigation.navigate('Login')}/>   */}
      <View style={styles.logoContainer}>
            <Logo uri={Images.logo}/>
            <Text style={styles.screenTitle}>{shrtUserId}</Text>            
      </View>
      <Text style={styles.nurseTitle}>General Nurse</Text>
      {/* <Text style={styles.nurseTitle}>Change Password</Text> */}
      {/* <Button
            style={styles.borderlessButtonContainer}
            borderless
            title={'Change Password'}
            onPress={() => navigation.navigate('ChangePassword')} //For change password page ..
      /> */}

      <Button style={styles.borderlessButtonContainer} onPress={handleChangePw}>
      <Text style={styles.buttonlessText}>Change Password</Text>
      </Button>

      <Text style={styles.nurseTitle}>Emergency Contact:{"\n"}</Text>    
      <Text style={styles.styleLabel}>
        <Text style = {styles.styleLabelText}>9233 8888</Text>
      </Text>    
      {/* <Button style={styles.button} title='Sign Out' onPress={handleLogout}/> */}
      <Button style={styles.button} onPress={handleLogout}>      
        <Text style={styles.buttonText}>Log out</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center'
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
  nurseTitle: {
    fontSize: 20,
    fontWeight: '300',
    color: Colors.black,
    paddingTop: 20
  },
  styleLabel: {
    width: '70%',
    textAlign: 'center',
    backgroundColor: "#D9D9D9",
    padding: 10,    
    borderRadius: 30,    
  },
  styleLabelText: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '700'
  },
  button: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
  }
});
