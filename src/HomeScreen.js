import React from 'react'
import Styles from './styles';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from 'react-native';
import Background_two from '../assets/dark.png';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ( { navigation } ) => {
  return (
    <View style={styles.cover}>
    <ImageBackground source={Background_two} style={{height:"100%", zIndex:1000,elevation:6}} >

    <View style={Styles.container}>
      <Text style={[Styles.welcome ,{fontSize:30, color:'white'}]}>Welcome To PrimeTop</Text>
      <Text style={[{fontSize:20, color:'white'}]}>Do your Recharges with ease</Text>
      <View style={[Styles.sign_up,{color:'white', marginTop:10, borderRadius:40, marginTop:120}]}>
        <TouchableOpacity
         onPress={()=>{ navigation.navigate('Login') }} 
        >
        <Text style={[{color:'white', fontSize:25}]}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[{color:'white', fontSize:20, marginTop:80}]}>..............  Or  .............</Text>
      </View>

      <View >
      <TouchableOpacity style={[Styles.sign_in ,{marginTop:10, borderRadius:10}]} 
          onPress={()=>{ navigation.navigate('Create_account') }} 
      >
        <Text style={[{color:'white', marginTop:150, fontSize:25, borderBottomWidth:1, borderColor:'white'}]} >Create Account</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})