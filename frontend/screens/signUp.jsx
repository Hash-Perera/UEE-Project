import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Provider } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
    const [showDropDown, setShowDropDown] = useState(false);
    const [accountType, setAccountType] = useState("");

    const handleBack = ()=>{
      navigation.navigate('Login');
    }

    const accountTypes = [
        {
          label: "General",
          value: "General",
        },
        {
          label: "Organizer",
          value: "Organizer",
        },
        {
          label: "Sponsor",
          value: "Sponsor",
        },
      ];

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={require('../assets/images/loginBackground.png')} style={styles.backgroundImage} resizeMode='cover' />
          <TouchableOpacity style={{ position: 'absolute', top: '10%', left: '1%' }} onPress ={handleBack}>
            <Image source={require('../assets/images/backIcon.png')} />
          </TouchableOpacity>
          <Text style={styles.welcomeText}>
            Create{'\n'} Account
          </Text>
        </View>
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              label="Name"
              mode='outlined'
              placeholder='Name'
              style={{ backgroundColor: '#fff' }}
            />
            <TextInput
              label="Email"
              mode='outlined'
              placeholder='Email'
              style={{ backgroundColor: '#fff' }}
            />
            <TextInput
              label="Password"
              mode='outlined'
              placeholder='Enter password'
              secureTextEntry={true}
              style={{ backgroundColor: '#fff' }}
            />
            <TextInput
              label="Confirm Password"
              mode='outlined'
              placeholder='Confirm password'
              secureTextEntry={true}
              style={{ backgroundColor: '#fff' }}
            />
            <DropDown
              label={"Account Type"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={accountType}
              setValue={setAccountType}
              list={accountTypes}
              inputProps={{
                right: <TextInput.Icon name={'menu-down'} />,
              }}
              style={{ backgroundColor: '#fff' }}
            />
            <TextInput
              label="Phone number"
              mode='outlined'
              placeholder='Phone number'
              style={{ backgroundColor: '#fff' }}
            />
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signButton} onPress={handleBack}>
                <Text style={styles.signButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    position: 'relative',
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: 350,
  },
  welcomeText: {
    position: 'absolute',
    top: '40%',
    left: '25%',
    transform: [{ translateX: -100 }, { translateY: -25 }],
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    margin: 30,
    marginTop: 20,
    gap: 20,
  },
  loginButton: {
    backgroundColor: "#16213E", // Button background color
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff", // Button text color
    fontSize: 18,
    fontWeight: "bold",
  },
  signButton: {
    backgroundColor: "#A5B2D2",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "65%",
    alignSelf: "center",
    marginTop: 20,
  },
  signButtonText: {
    color: "#070A35",
    fontSize: 18,
    fontWeight: 300,
  },
});

export default SignUp;
