// SimpleMenu.js
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
 Menu,
 MenuProvider,
 MenuOptions,
 MenuOption,
 MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";

export const SimpleMenu = () => {
    return (
      <MenuProvider style={styles.container}>
        <Menu>
          <MenuTrigger
            customStyles={{
              triggerWrapper: {
                top: -70,
                right: -360,

              },
            }}
          >
            <Entypo name="dots-three-vertical" size={28} color="black" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Settings" />
            <MenuOption onSelect={() => alert(`Report Error`)} text="Report Error" />
            <MenuOption onSelect={() => alert(`Last updated: 12/12/2020 \n
This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
We use your Personal Information only for providing and improving the Site. 
By using the Site, you agree to the collection and use of information in accordance with this policy.
        \n
Log Data
Like many site operators, we collect information that your browser sends whenever you visit our Site.
            `)} text="About" />
            <MenuOption onSelect={() => alert(`FAQ: https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Health-Enrichment-Centre/Pages/default.aspx \n 
            Contact (Hospital Admin) \n
            Tel : 6357 2233 | 8357 2235 Email : HEC@ttsh.com.sg\n
            (IT Support Admin)\n
            Tel : 6456 2233 | 9077 2235 Email : ITSupport@ttsh.com.sg
            
            `)} text="Help" />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
   };

const styles = StyleSheet.create({
 simpleMenuStyle: {
   flex: 1,
   backgroundColor: "#fff",
   justifyContent: "center",
   alignItems: "center",
   padding: 30,
   flexDirection: "column",
 },
});