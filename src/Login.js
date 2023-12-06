// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput,StyleSheet,Text } from 'react-native';
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ForgotPasswordScreen from './Forgot_password';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
          <View style={Styles.sign_in}>
            <Text  style={[{fontSize:20}]}>Welcome Back</Text>
            <Text  style={[{fontSize:25}]}> Please, Log In</Text>
            </View>
      
      <TextInput
        style={[styles.input,{color:'black', marginTop:10, borderRadius:25, marginTop:80}]}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={[styles.input,{color:'black', marginTop:10, borderRadius:25, marginTop:16}]}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
         {/* <Button title="Login" onPress={handleLogin}  /> */}
      <View style={[styles.login, {borderRadius:25}]}> 
         <TouchableOpacity
         onPress={()=>{ navigation.navigate('Landing') }}
         >
          <Text style={[{fontSize:20, color:'white'}]}>Login</Text>
         </TouchableOpacity>
      </View>

      <View>
        <Text style={[{color:'gray', fontSize:20, marginTop:80}]}>..............  Or  .............</Text>
      </View>

      <View >
      <TouchableOpacity
          onPress={()=>{ navigation.navigate('ForgotPasswordScreen') }} 
      >
        <Text style={[{color:'gray', fontSize:25, borderBottomWidth:1, borderColor:'gray',marginTop:20}]} >Forgot password?</Text>
      </TouchableOpacity>
      </View>

      <View style={[styles.login_two, {borderRadius:25, marginTop:90}]}> 
         <TouchableOpacity
          onPress={()=>{ navigation.navigate('Create_account') }} 
         >
          <Text style={[{fontSize:20, color:'white'}]}>Create Account</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  login:{
    width:'100%',
    backgroundColor: '#e03a3c',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_two:{
    width:'100%',
    backgroundColor: 'gray',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
