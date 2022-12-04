import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import { sendPasswordResetEmail } from 'firebase/auth';

import { passwordResetSchema } from '../utils';
import { Images, Colors, auth } from '../config';
import { View, TextInput, Logo, Button, FormErrorMessage } from "../components";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTogglePasswordVisibility } from "../hooks";
import { signupValidationSchema } from "../utils";

import { getDatabase, push, ref, set } from "firebase/database";

export const ChangePasswordScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState('');

  // const handleSendPasswordResetEmail = values => {
  //   const { email } = values;

  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       console.log('Success: Password Reset Email sent.');
  //       navigation.navigate('Profile');
  //     })
  //     .catch(error => setErrorState(error.message));
  // };

  const {
    passwordVisibility,
    handlePasswordVisibility,
    rightIcon,
    handleConfirmPasswordVisibility,
    confirmPasswordIcon,
    confirmPasswordVisibility,
  } = useTogglePasswordVisibility();

  const handleSignup = async (values) => {
    const { username, email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const db = getDatabase();
        const reference = ref(db, "users/");
        push(reference, {
          username: username,
          email: email,
        }).key;
      })
      .catch((error) => setErrorState(error.message));
  };

  return (
    <View isSafe style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>                  
        <Text style={styles.screenTitle}>Change Password</Text>        
        {/* Formik Wrapper */}
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupValidationSchema}
          onSubmit={(values) => handleSignup(values)}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <>
              {/* Input fields */}
              {/* <TextInput
                name="username"
                leftIconName="email" // need find icon name
                placeholder="Enter username"
                autoCapitalize="none"
                // keyboardType="email-address"
                textContentType="username"
                autoFocus={true}
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
              /> */}
              
              <TextInput
                name="email"
                leftIconName="key-variant"
                // value={email}
                // onChangeText={(email)=>{setEmail(email)}}
                placeholder="Current password"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
                <FormErrorMessage
                error={errors.password}
                visible={touched.password}
              />          
              {/* <FormErrorMessage error={errors.email} visible={touched.email} /> */}
              <TextInput
                name="password"
                leftIconName="key-variant"
                placeholder="New password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                textContentType="newPassword"
                rightIcon={rightIcon}
                handlePasswordVisibility={handlePasswordVisibility}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <FormErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <TextInput
                name="confirmPassword"
                leftIconName="key-variant"
                placeholder="Retype new password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={confirmPasswordVisibility}
                textContentType="password"
                rightIcon={confirmPasswordIcon}
                handlePasswordVisibility={handleConfirmPasswordVisibility}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
              />
              <FormErrorMessage
                error={errors.confirmPassword}
                visible={touched.confirmPassword}
              />
              {/* Display Screen Error Mesages */}
              {errorState !== "" ? (
                <FormErrorMessage error={errorState} visible={true} />
              ) : null}
              {/* Signup button */}
              <Button style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Update Password</Text>
              </Button>
            </>
          )}
        </Formik>
        {/* Button to navigate to Login screen */}
        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title={"Forgot password?"}
          onPress={() => navigation.navigate("Forgot Password")}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12
  },
  innercontainer: {
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    paddingBottom: 20,
    textAlign: 'center',
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
  }
});
