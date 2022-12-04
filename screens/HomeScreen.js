import React from 'react';
import { Dimensions, View, StyleSheet, Button, Text, SafeAreaView, FlatList, StatusBar, TouchableOpacity, Alert , Animated } from 'react-native';
import { Colors,auth } from '../config'; //Images
import Carousel from 'react-native-reanimated-carousel';

import { SimpleMenu } from '../components';

import { signOut } from 'firebase/auth';

import { useSharedValue, useAnimatedStyle, interpolate, Extrapolate} from 'react-native-reanimated';

import { getDatabase, ref, query, orderByChild, onValue, child, get, set } from 'firebase/database';

const DATA5 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b6',
    title: 'Schedule has been updated by the Head Nurse. Please check the updated schedule for any....',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f83',
    title: 'Washer G has finished servicing. Activities will resume as per normal. Do take note that the only f.... ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f86',
    title: 'There has been a leak detected with Endoscope A5, please stop any tasks pertaining with the scop.... ',
  },
];

const DATA3 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '10:15am',
    content: 'B3 Washer',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '11:55am',
    content: 'A1 Sample',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '12:30pm',
    content: 'B1 Washer',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d42',
    title: '14:30pm',
    content: 'C2 Sample',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: '16:20pm',
    content: 'A5 Washer',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: '17:30pm',
    content: 'C4 Sample',
  },
];




//-----------------------------------------------------------------------------------------------------------
  export const HomeScreen = ({navigation}) => {
    //Error Handling after Log In
    const handleLogout = () => {
      signOut(auth).catch(error => console.log('Error logging out: ', error));
      };
    
    const handleChangeNavigation = () => {    
      return navigation.navigate('Announcement');
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

    const showUserName = ref(db, 'users');
    var keys = [];
    var counts = [];
    var haha = [];
    var i;

    onValue(showUserName , (snapshot) => {
      console.log(snapshot.val());
      snapshot.forEach(function (item){
        keys.push(item.val());
      });
      for (i = 0; i < keys.length; i++){
        counts.push(keys[i].username);
        haha.push(keys[i].email, keys[i].username);
      }
      console.log("Keys: " + keys);
      console.log("Counts: " + counts);
      console.log("haha: " + haha);
    })

    // Specified Carousel Container width 
    const width = Dimensions.get('window').width;
    var shrtUserId = myUserId.replace('@ttsh.com.sg','');
    function SampleFunction(item){
      Alert.alert(item);
    }
    const progressValue = useSharedValue(0);

  return (
//-----------------------------------------------------------------------------------------------------------
    // Start of Main Body
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Welcome back</Text>
      <Text style={[styles.defaultText, { fontSize: 25 ,},]}>{shrtUserId}</Text>
      <Text>{"\n"}</Text>
      <Text style={[styles.defaultText, { fontWeight: 'bold',fontSize: 22 ,}]}>Announcements:</Text>
      <Text style={[styles.defaultText, { fontSize: 17 , fontStyle:'italic', color:'#3e99a0',}]} onPress={handleChangeNavigation}>View All Announcements </Text>


      {/* Carousel for Announcements---------------- */}
        <Carousel
          loop={false}
          width={width}
          height= {200}
          autoPlay={false}
          scrollAnimationDuration={800}
          enableSnap={true}
          mode="parallax"
          style={{maxHeight:190, borderRadius: 25}}
          modeConfig={{parallaxScrollingScale: 0.91, parallaxScrollingOffset: 70}}
          // onSnapToItem={(index) => console.log('current index:', data_list)}
          // Data of Announcements (4 Announcements)
          data={DATA5}
          renderItem={ renderItem }
        />
      <Text>{"\n"}</Text>
      
      {/* FLATLIST testing---------------- */}
      {/* Try FlatList to work on the multiple items inside the carousel https://reactnative.dev/docs/flatlist */}
      <Text style={[styles.defaultText, { fontWeight: 'bold',fontSize: 22 ,}]}>Today's Task:</Text>
      {/* <SafeAreaView style={styles.container}> */}
      <FlatList
        horizontal={true}
        style={{maxHeight:175,flexGrow:1}}
        data={DATA3}
        renderItem = {renderItem}
      />


      {/* { haha.map((item, key)=>(
        <Text key={key} style={styles.TextStyle} onPress={ SampleFunction.bind(this, item) }> { item } </Text>)
         )} */}

      {/*<Button title='Profile Page' onPress={() => navigation.navigate('Profile')} />
      <Text>{"\n"}</Text>*/}
      {/* <Text>{showUserName}</Text> */}
      
      {/* <Button title='Showcase'onPress={() => { this._carousel.snapToNext(); }} /> */}
      
      {/* <Text>{getDbUser}</Text> */}
      {/* <Text>{query}</Text> */}
      {/* <Button title='Sign Out' onPress={handleLogout} /> */}


      {/* </SafeAreaView> */}
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
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 3,
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

