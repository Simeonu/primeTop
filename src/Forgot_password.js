// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';

// Create a functional component for the forgot password page
const ForgotPasswordScreen = () => {
  // State variable to store the user's email
  const [email, setEmail] = useState('');

  // Function to handle the "Reset Password" button press
  const handleResetPassword = () => {
    // Perform password reset logic here (e.g., send a reset email to the user)
    // For simplicity, we will just log the user's email for now
    console.log('Reset Password for email:', email);

    // Reset the input field after attempting password reset
    setEmail('');
  };

  return (
    <View style={styles.container}>
      {/* Display instructions for password reset */}
      <Text>
        Enter your email address below, and we'll send you a link to reset your
        password.
      </Text>

      {/* Display input field for the user's email */}
      <Text>Email:</Text>
      <TextInput
        style={[styles.input,{color:'black', borderRadius:40, marginTop:10}]}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      {/* "Reset Password" button */}
      {/* <Button title="Reset Password" onPress={handleResetPassword} /> */}
      <View style={[styles.reset_password, {borderRadius:40}]}> 
         <TouchableOpacity>
          <Text style={[{fontSize:20, color:'white'}]}>Reset Password</Text>
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

  reset_password:{
    width:'100%',
    backgroundColor: '#e03a3c',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Export the component
export default ForgotPasswordScreen;
