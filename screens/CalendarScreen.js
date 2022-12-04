import React, {Component,  useState, useMemo } from 'react';
import { Image } from 'react-native';
 
import { Calendar } from "react-native-calendars";
// yarn add react-native-calendars date-fns
// yarn add rn-swipeable-panel
// npm install --save react-native-profile-picture
import {
  StyleSheet,
  Text,
  View,  
  FlatList, 
  SafeAreaView,
  ScrollView,
} from 'react-native';


import { SwipeablePanel } from 'rn-swipeable-panel';

import { ProfilePicture } from  'react-native-profile-picture'

import { Images, Colors, auth } from '../config';

//import { Logo, Button } from '../components/Button';
import { Logo, Button } from '../components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { range } from 'lodash';
import { goOnline } from 'firebase/database';

export const CalendarScreen  = () => {
  var day = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear();
  var today = year + "-" + month + "-" + day;
  const initDate = today;
  const [selected, setSelected] = useState(initDate);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    onlySmall: false,
    showCloseButton: true,
    noBackgroundOpacity: true,
    allowTouchOutside: true,
    smallPanelHeight: 685,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want`
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
    setSelected(today);
  };

  const CustomCalendar = (props) =>{
    const marked = useMemo(() => ({
      [selected]: {
        selected: true,
        selectedColor: '#3e99a0',
        selectedTextColor: 'white',
      }
    }), [selected]);
    
    return (
      <Calendar
        initialDate={selected}
        markedDates={{[selected]: {
          selected: true,
        selectedColor: '#3e99a0',
        selectedTextColor: 'white',
        },}}
        onDayPress={(day) => {
          setSelected(day.dateString);
          props.onDaySelect && props.onDaySelect(day);
          var dateOutput = CheckDate.call(day.dateString);
          console.log(dateOutput);
          openPanel();
          CheckDate.call(day.dateString);
        }}
        {...props}
      />
    );
  }
  
  function CheckDate(dateString) {
    if (dateString == "2022-11-06") {
      return(
              
      <View style={styles.containertest}>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>New Endoscope B1 Arrival</Text>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>Nurse Joy</Text>
        </View> 

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View>
        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8789/8789936.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Mike</Text>          
            </View>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>10:00 AM - 12:00PM</Text>
        </View> 

      
        <View style={styles.swipeable_blank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>Endoscope A1 Wash</Text>
        </View>

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View> 
        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8789/8789936.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Mike</Text>          
            </View>
        </View> 

        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/196/196125.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>       Senior Nurse Rogerica</Text>          
            </View>
          </View>

        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>2:00 PM - 4:00PM</Text>
        </View>

        <View style={styles.swipeable_blank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>Endoscope H7 Wash</Text>
        </View>

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View> 

        <View style={styles.swipeable}>           
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/196/196125.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>       Senior Nurse Rogerica</Text>          
            </View>
        </View> 

        

        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>4:00 PM - 5:00PM</Text>
        </View>
        
        <View style={styles.swipeable_largeblank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text></View>        

      </SwipeablePanel>
    </View>
      )
    } if (dateString == "2022-11-07") {
      
    } if (dateString == "2022-11-08") {
      
    } else {
      return(
              
      <View style={styles.containertest}>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>New Endoscope B1 Arrival</Text>
          
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>Nurse Joy</Text>
        </View> 

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View>
        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8789/8789936.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Mike</Text>          
            </View>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>10:00 AM - 12:00PM</Text>
        </View> 

      
        <View style={styles.swipeable_blank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>Endoscope A1 Wash</Text>
        </View>

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View> 
        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8789/8789936.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Mike</Text>          
            </View>
        </View> 

        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/196/196125.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>       Senior Nurse Rogerica</Text>          
            </View>
          </View>

        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>2:00 PM - 4:00PM</Text>
        </View>

        <View style={styles.swipeable_blank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>Endoscope H7 Wash</Text>
        </View>

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View> 

        <View style={styles.swipeable}>           
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/196/196125.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>       Senior Nurse Rogerica</Text>          
            </View>
        </View> 

        

        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>4:00 PM - 5:00PM</Text>
        </View>
        
        <View style={styles.swipeable_largeblank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text></View>        

      </SwipeablePanel>
    </View>
      )
      
    }
  }
  
  return (
    <View>
      <View style={styles.header}>
          <View style={styles.header_item}>
              <Text style={[styles.header_text, styles.text_right]}></Text>
          </View>
          <View style={styles.header_item}>
              <Text style={[styles.header_text, styles.bold_text, styles.text_center]}>Calendar</Text>
          </View>
          <View style={styles.header_item}>
              <Text style={[styles.header_text, styles.text_right]}>Today</Text>
          </View>
      </View>    

      
      <View style={styles.calendar_days}>
          <CustomCalendar
        />
      </View>
      

      <View style={styles.containertest}>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View style={styles.swipeable}>
          <View style={{flexDirection: 'column'}}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>New Endoscope B1 Arrival</Text>
          <Text style={[styles.swipeable_text, styles.bold_text,]}>{'\n'}{selected}</Text>
          </View>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>Nurse Joy</Text>
        </View> 

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View>
        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8789/8789936.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Mike</Text>          
            </View>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>10:00 AM - 12:00PM</Text>
        </View> 

      
        <View style={styles.swipeable_blank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>Endoscope A1 Wash</Text>
        </View>

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View> 
        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8789/8789936.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Mike</Text>          
            </View>
        </View> 

        <View style={styles.swipeable}>            
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/196/196125.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>       Senior Nurse Rogerica</Text>          
            </View>
          </View>

        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>2:00 PM - 4:00PM</Text>
        </View>

        <View style={styles.swipeable_blank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text>
        </View>
        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>Endoscope H7 Wash</Text>
        </View>

        <View style={styles.swipeable}>
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/387/387610.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>         Nurse Joy</Text>          
           </View>
        </View> 

        <View style={styles.swipeable}>           
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
              }}>
              <Image style={{width: 30, height: 30}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/196/196125.png',
              }}
              />    

              <Text style={[styles.swipeable_smalltext, styles.bold_text, styles.text_center]}>       Senior Nurse Rogerica</Text>          
            </View>
        </View> 

        

        <View style={styles.swipeable}>
          <Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}>4:00 PM - 5:00PM</Text>
        </View>
        
        <View style={styles.swipeable_largeblank}><Text style={[styles.swipeable_text, styles.bold_text, styles.text_center]}></Text></View>        

      </SwipeablePanel>
    </View>

    </View>
  );

};


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3e99a0',
    flexDirection: 'row',
    padding: 10
  },
  header_item: {
      flex: 1
  },
  header_button: {
      flexDirection: 'row'
  },
  text_center: {
      textAlign: 'center',
  },
  text_right: {
      textAlign: 'right'
  },
  header_text: {
      color: '#fff',
      fontSize: 20
  },
  bold_text: {
      fontWeight: 'bold'
  },

  swipeable: {
    backgroundColor: '#3e99a0',
    flexDirection: 'row',
    padding: 20,
  },  
  swipeable_blank: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 5
  },  
  swipeable_largeblank: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 100
  },
  swipeable_item: {
      flex: 1
  },
  swipeable_button: {
      flexDirection: 'row'
  },
  swipeable_text: {
    color: '#fff',
    fontSize: 20
  },  
  swipeable_smalltext: {
    color: '#fff',
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
    containertest: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 600,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center'
  }
});

