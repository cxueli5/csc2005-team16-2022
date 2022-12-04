import React, {useState, useRef, useEffect, DeviceEventEmitter, } from 'react';
import { View, StyleSheet, Button , Text, SafeAreaView, FlatList, Image, Modal, Dimensions} from 'react-native';
import { signOut } from 'firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';

import { auth } from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';




export const WasherScreen = ({route, navigation}) => {
  
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  var idCounter = 3;
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    const [washerObj, updatedWasherObj]= useState([
        {
          id: 1,
          'name' : 'Washer A',
          'timeRemaining': 28,
          'endoscopes': ['A1', 'A2', 'A3', 'A4']
        },
        {
          id: 2,
          'name' : 'Washer B',
          'timeRemaining': 14,
          'endoscopes': ['B1', 'B2']
        },
        {
          id: 3,
          'name' : 'Washer C',
          'timeRemaining': 25,
          'endoscopes': ['C1', 'C2', 'C3']
        },
      
    ]); 

    
    var listOfAvailableWasher = ['Washer D', 'Washer E', 'Washer F'];
    var listOfAvailableWasher = ['D1', 'D2', 'D3', 'E1', 'E2', 'E3', 'F1', 'F2', 'F3'];

    const [availableWasherArray, setAvailableWasherArray] = useState([
      {
        label: 'Washer A',
        value : 'Washer A',
        'availableSlot': 2
     },
      {
        label: 'Washer B',
        value : 'Washer B',
        'availableSlot': 2
     },
     {
       label: 'Washer C',
       value : 'Washer C',
       'availableSlot': 1
    },
      {
         label: 'Washer D',
         value : 'Washer D',
         'availableSlot': 4
      },
      {
        label: 'Washer E',
        value : 'Washer E',
        'availableSlot': 4
     },
     {
      label: 'Washer F',
      value : 'Washer F',
      'availableSlot': 4
   },
   {
    label: 'Washer G',
    value : 'Washer G',
    'availableSlot': 4
 },
 {
  label: 'Washer H',
  value : 'Washer H',
  'availableSlot': 4
},
{
  label: 'Washer I',
  value : 'Washer I',
  'availableSlot': 4
},
{
  label: 'Washer J',
  value : 'Washer J',
  'availableSlot': 4
},
{
  label: 'Washer K',
  value : 'Washer K',
  'availableSlot': 4
},
{
  label: 'Washer L',
  value : 'Washer L',
  'availableSlot': 4
},
{
  label: 'Washer M',
  value : 'Washer M',
  'availableSlot': 4
},
{
  label: 'Washer N',
  value : 'Washer N',
  'availableSlot': 4
},
{
  label: 'Washer O',
  value : 'Washer O',
  'availableSlot': 4
},
{
  label: 'Washer P',
  value : 'Washer P',
  'availableSlot': 4
},
{
  label: 'Washer Q',
  value : 'Washer Q',
  'availableSlot': 4
},
{
  label: 'Washer R',
  value : 'Washer R',
  'availableSlot': 4
},
{
  label: 'Washer S',
  value : 'Washer S',
  'availableSlot': 4
},
{
  label: 'Washer T',
  value : 'Washer T',
  'availableSlot': 4
},
{
  label: 'Washer U',
  value : 'Washer U',
  'availableSlot': 4
},
{
  label: 'Washer V',
  value : 'Washer V',
  'availableSlot': 4
},
{
  label: 'Washer W',
  value : 'Washer W',
  'availableSlot': 4
},
{
  label: 'Washer X',
  value : 'Washer X',
  'availableSlot': 4
},
{
  label: 'Washer Y',
  value : 'Washer Y',
  'availableSlot': 4
},
{
  label: 'Washer Z',
  value : 'Washer Z',
  'availableSlot': 4
},
    ])

  const [availableEndoscopeArray, setAvailableEndoscopeArray] = useState([
    {
      label: 'A1',
      value : 'A1',
   },
    {
      label: 'B3',
      value : 'B3',
   },
   {
    label: 'C4',
    value : 'C4',
  },
    {
      label: 'D1',
      value : 'D1',
   },
   {
    label: 'D2',
    value : 'D2',
  },
    {
      label: 'D3',
      value : 'D3',
    },
    {
      label: 'E1',
      value : 'E1',
   },
   {
    label: 'E2',
    value : 'E2',
 },

  ])

  const [state, setUpdatedState] = useState(washerObj);
  const [modalVisibleState, setModalVisibleState] = useState(false);
  const [washerDropdownState, setWasherDropdownState] = useState(false);
  const [endoscopesDropdownState, setEndoscopesDropdownState] = useState(false);
  const [washerDropdownValue, setWasherDropdownValue] = useState(null);
  const [endoscopesDropdownValue, setEndoscopesDropdownValue] = useState([]);
  const [scanned, setScanned] = useState(true);

  const Item = ({ name,timeRemaining , endoscopesList}) => (
    <View style={styles.item}>
      <View style={{flex: 1, flexDirection: 'row', paddingBottom: 20}}>
      <Text style={styles.listTitle}>{name}</Text>
      <Text style={styles.listTime}>{timeRemaining} mins</Text>
      </View>
      <View style={styles.endoscopesItem}>
        {renderEndoscopeItem(endoscopesList)}
        </View>
      <View>
      </View>
    </View>
    );
    
  const renderItem = ({item}) => (
      <Item name={washerObj[item].name} timeRemaining={washerObj[item].timeRemaining} endoscopesList={washerObj[item].endoscopes}/>
  );

  const addItem = (name, endoscopes) => {
    var tempArray = [...washerObj ,
      {
      id: idCounter++,
      'name' : name,
      'timeRemaining': 30,
      'endoscopes': endoscopes,
    }]


      setUpdatedState(tempArray);
      updatedWasherObj(tempArray);
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const renderEndoscopeItem = (item) => {
    let itemList = [];
    item.map(element => {
      itemList.push(<View style={{paddingRight: 50}}>
        <View style={{}}>
        <Image style={{width: 30, height: 30, padding: 20}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1225/1225717.png',
              }}
              />
        </View>
        <Text style={{paddingLeft: 10, fontSize: 15, paddingTop: 7}}>{element}</Text>
        </View>)
    });

    return itemList;
  }

  const AddButtonPressed = () => {
    if (washerDropdownValue != null & endoscopesDropdownValue != []){
    var tempArray = [...washerObj , 
      {
      id: idCounter++,
      'name' : washerDropdownValue,
      'timeRemaining': 30,
      'endoscopes': endoscopesDropdownValue,
    }]

      setUpdatedState(tempArray);
      updatedWasherObj(tempArray);

      setWasherDropdownValue(null);
      setEndoscopesDropdownValue([]);
    }
  }
  var param = null;
  param = route.params;


  const hello = () => {
    var tempArray = [...washerObj , 
      {
      id: idCounter++,
      'name' : param.scannedWasher,
      'timeRemaining': 30,
      'endoscopes': param.scannedEndoscope,
    }]

      setUpdatedState(tempArray);
      updatedWasherObj(tempArray);
  }



  if (param != null && scanned){
    setScanned(false);
    route.params = null;
    hello();
  }


  return (
    <View style={styles.container}>
       <View style={styles.container}>
       <View style={{position:'absolute', top: 5, left: ((Dimensions.get('window').width) - 80), zIndex: 1}}>
      <TouchableOpacity  onPressIn = {() => {setScanned(true); navigation.navigate('Barcode Scanner')}} >
        <View style={{backgroundColor: '#000', width: 60, height: 60,  borderRadius: 30}}>
          <View style={{flex: 1, alignSelf: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center',}}>
        <Ionicons name={'ios-barcode-outline'} size={40} color= {'#fff'}/>
        </View>
        </View>
      </TouchableOpacity> 
      </View>

      <Text>{"\n"}</Text>

      {/* FLATLIST testing---------------- */}
      {/* Try FlatList to work on the multiple items inside the carousel https://reactnative.dev/docs/flatlist */}
      <SafeAreaView style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleState}>
          <View 
        style={{justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        alignContent: "center",
        flex: 1,
        width: 250,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        }}>
          <View style={{width: 300, backgroundColor: '#fff', alignItems: "center", paddingTop: 10,
        alignContent: "center", borderRadius: 25}}>
          <View style={{flexDirection: 'row', padding: 0, margin:0}}>
            <View style={{padding: 0, margin:0,flex: 0.9, alignItems: 'flex-end', alignSelf: 'flex-start', alignContent: 'flex-start'}}>
              <TouchableHighlight onPress={() => setModalVisibleState(false)} underlayColor={'#fff'}>
            <Ionicons name={'ios-close-circle'} size={30} color={'#000'} />
            </TouchableHighlight>
            </View>
          </View>
          <Text style = {styles.modalText}>Select Washer</Text>
          <View  style = {{width: '80%', alignSelf: 'center', zIndex: 99}}>
          <DropDownPicker
           open = {washerDropdownState}
           value = {washerDropdownValue}
          items = {availableWasherArray}
          setOpen = {setWasherDropdownState}
          setValue = {setWasherDropdownValue}
          setItems = {setAvailableWasherArray}
          />
          </View>
          <Text style = {styles.modalText}>Select Scope</Text>
          <View style={{zIndex: 1}}>
          <DropDownPicker
           multiple={true}
           min={1}
           max={4}
           open = {endoscopesDropdownState}
           value = {endoscopesDropdownValue}
           items = {availableEndoscopeArray}
           setOpen = {setEndoscopesDropdownState}
           setValue = {setEndoscopesDropdownValue}
           setItems = {setAvailableEndoscopeArray}
           containerStyle = {{width: '80%', alignSelf: 'center'}}
          />
          </View>
          <TouchableHighlight activeOpacity={0.9} underlayColor="#DDD" onPress={() => {AddButtonPressed(); setModalVisibleState(false);}} style = {{width: 100, height: 40, backgroundColor: '#000', margin: 20, alignSelf: 'center', borderRadius: 15, zIndex: -99, elevation: -99}}>
            <View style={{justifyContent:'center', alignContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Add</Text>
            </View>
          </TouchableHighlight>
          
          </View>

          </View>
          

        </Modal>
      <FlatList
        style={{maxHeight:650,flexGrow:1}}
        data={Object.keys(washerObj)}
        contentContainerStyle={{ paddingBottom: 100}} 
        renderItem={renderItem}
      />
      <View style={{position:'absolute', bottom: 20, left: ((Dimensions.get('window').width/2) - 35), zIndex: 1}}>
      <TouchableOpacity  onPressIn = {() => {setModalVisibleState(true);}} >
        <Ionicons name={'ios-add-circle'} size={70} color= {'#000'}/>
      </TouchableOpacity> 
      </View>

      
      </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25
  },
  listTitle: {
    flex: 0.8,
    color: '#000',
    fontSize: 20,
  },
  listTime: {
    fontSize: 15,
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  endoscopesItem:{
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  modalText: {
    fontSize: 20,
    padding: 20,
    zIndex: -1
  }
});

