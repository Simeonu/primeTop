// Import necessary components from React and React Native
 // Dashborad
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// Create a functional component for the sign-up page
const SignUpScreen = ({ navigation } ) => {
  // State variables to store user input
  const [Fullname, setFullname] = useState('');
  const [Username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword]       = useState('');


  // Function to handle sign-up button press
  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., send data to a server)
    if(!Fullname || !Username || !email || !phoneNumber || !password) {
        Alert.alert(
           "Error",
           "All fields are required",
           [
             { 
              text: "Okay",
              onPress:()=>{
                   console.log("Okay")
              }
            }
           ]
        );
    }else{
      fetch("http://192.168.43.247/prime_top_api/create-account/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: Fullname,
          username: Username,
          email: email,
          phoneNumber:phoneNumber,
          password:password,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log( responseData ); 
          console.log( typeof responseData ); 
          
          // check response is success
          if ( responseData.message === 'success' )  {
               navigation.navigate('Login');
          }else{
              console.log( " OOPs !!! ");
          }
        })
        .catch( error => console.log(error) );


    }

    // Reset the input fields after sign-up
    setFullname('');
    setUsername('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {/* Display input fields for user information */}
      <Text>Fullname:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={Fullname}
        onChangeText={ ( val )=> setFullname(val)}
        placeholder="Enter your fullname"
      />

      <Text>Username:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={Username}
        onChangeText={ ( user ) => setUsername(user) }
        placeholder="Enter your username"
      />

      <Text>Email:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={email}
        onChangeText={ ( email ) => setEmail( email ) }
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text>Phone Number:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={phoneNumber}
        onChangeText={ ( phone ) => setPhoneNumber( phone ) }
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <Text>Password:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:25}]}
        value={password}
        onChangeText={( pass ) => setPassword(pass) }
        placeholder="Enter your password"
        secureTextEntry
      />

      {/* Sign-up button */}
      {/* <Button title="Sign Up" onPress={handleSignUp} /> */}

      <View style={[styles.Create_account, {borderRadius:25}]}> 
         <TouchableOpacity onPress={handleSignUp}>
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
