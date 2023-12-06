// Import necessary components from React and React Native
 // Dashborad
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Create a functional component for the sign-up page
const SignUpScreen = ({ navigation } ) => {
  // State variables to store user input
  const [surname, setSurname] = useState('');
  const [othernames, setOthernames] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign-up button press
  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., send data to a server)
    // For simplicity, we will just log the user input for now
    console.log({
      surname,
      othernames,
      email,
      phoneNumber,
      password,
    });

    // Reset the input fields after sign-up
    setSurname('');
    setOthernames('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {/* Display input fields for user information */}
      <Text>Surname:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={surname}
        onChangeText={setSurname}
        placeholder="Enter your surname"
      />

      <Text>Othernames:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={othernames}
        onChangeText={setOthernames}
        placeholder="Enter your other names"
      />

      <Text>Email:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text>Phone Number:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <Text>Password:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      {/* Sign-up button */}
      {/* <Button title="Sign Up" onPress={handleSignUp} /> */}

      <View style={[styles.Create_account, {borderRadius:25}]}> 
         <TouchableOpacity>
          <Text style={[{fontSize:20, color:'white'}]}>Create Account</Text>
         </TouchableOpacity>
      </View>

      <View style={styles.or_create_account}>
        <Text style={[{color:'gray', fontSize:20, marginTop:20}]}>..............  Or  .............</Text>
      </View>

      <View style={[styles.Back_to_login, {borderRadius:25, marginTop:50}]}>
        <TouchableOpacity
        onPress={()=>{ navigation.navigate('Login') }} 
        >
        {/* <Text style={[styles.Back_to_login, {fontSize:20, color:'black', borderBottomWidth:1, borderColor:'black', width:130}]}>Back to login?</Text> */}
        <Text style={[{fontSize:20, color:'white'}]}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    // alignItems: 'center',
  },

  or_create_account:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    width: '100%',
    height:60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Create_account:{
    width:'100%',
    backgroundColor: '#e03a3c',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Back_to_login:{
      width:'100%',
      backgroundColor: 'gray',
      height:60,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

// Export the component
export default SignUpScreen;
