import React, { useState, useMemo, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { signOut } from "firebase/auth";

import { Colors, auth } from "../config"; //  Images
import { TextInput, Button } from "../components";
import SwitchSelector from "react-native-switch-selector";
import { Calendar } from "react-native-calendars";

export const SearchScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  // const [searchQuery, setSearchQuery] = React.useState("");
  // const onChangeSearch = (query) => setSearchQuery(query);

  const switchoptions = [
    { label: "Scope ID", value: "scopeID" },
    { label: "Patient ID", value: "patientID" },
  ];
  const [text, setText] = React.useState("");
  const [option, setOption] = React.useState("scopeID");

  // react-native-calendars
  function CustomCalendar(props) {
    const initDate = "2022-11-01";
    const [range, setRange] = useState({});

    // Using useMemo to perform calculations only if range is modified
    const marked = useMemo(() => {
      if (!range.startDate) return {};

      let start = new Date(range.startDate).getTime();
      let end = new Date(range.endDate || range.startDate).getTime();
      let marked = {};

      for (let cur = start; cur <= end; cur += 60 * 60 * 24000) {
        let curStr = new Date(cur).toISOString().substr(0, 10);
        marked[curStr] = {
          selected: true,
          color: "#BCD635",
          textColor: "white",
          startingDay: cur == start,
          endingDay: cur == end,
        };
      }
      return marked;
    }, [range]);

    function handleDayPress(day) {
      if (range.startDate && !range.endDate) {
        // startDate is selected. Complete the range selection
        let newRange = { ...range, ...{ endDate: day.dateString } };
        props.onRangeSelected && props.onRangeSelected(newRange);
        setRange(newRange);
      } else {
        // startDate isn't selected. Start the range selection
        setRange({
          startDate: day.dateString,
        });
      }
    }

    return (
      <Calendar
        initialDate={initDate}
        markedDates={marked}
        markingType="period"
        onDayPress={handleDayPress}
        {...props}
      />
    );
  }

  function searchId(option) {
    if (option == "scopeID") {
      console.log("going to scope ID");
      navigation.navigate("ScopeSearch");
    } else if (option == "patientID") {
      console.log("going to patient ID");
      navigation.navigate("PatientSearch");
    } else {
      console.log("error, cannot search");
    }
  }

  return (
    <View style={styles.container}>
      <SwitchSelector
        style={styles.switchSelect}
        options={switchoptions}
        initial={0}
        onPress={(value) => {
          setText("");
          setOption(value);
          console.log(value);
          console.log("set: " + value);
        }}
      />

      {/* <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      /> */}

      <TextInput
        name="searchinput"
        placeholder="Enter ID"
        value={text}
        onChangeText={(text) => {
          setText(text);
          console.log(text);
        }}
      />

      <SafeAreaView style={styles.calendar}>
        <CustomCalendar
          onRangeSelected={(range) => {
            console.log("Range selected: ", range);
          }}
        />
      </SafeAreaView>

      <View style={styles.bottom}>
        <Button style={styles.button} onPress={() => {
            searchId(option);
          }}>   
          <Text style={styles.buttonText}>Search</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
  },
  switchSelect: {
    paddingTop: 70,
    paddingBottom: 50,
  },
  signOutBtn: {
    position: "absolute",
    bottom: 0,
  },
  bottom: {
    // flex: 1,
    // justifyContent: "flex-end",
    //marginBottom: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // searchBar: {
  //   marginTop: 20,
  //   width: 380,
  //   marginLeft: 4,
  // },
  calendar: {
    marginTop: 30,
  },
  loginBtn: {
    backgroundColor: Colors.black,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 30,
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
});
