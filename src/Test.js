import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
// import React from 'react'
import React, { useState } from 'react';
// import { View, Text, , Button } from 'react-native';

  const Airtimeself = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('');

  const handleTopup = () => {
    // Implement your top-up logic here
    console.log(`Top up ${amount} on ${network}`);
    // You can add the logic to interact with an API for actual top-up
  };

  return (
  
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Airtime Top-up</Text>
      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TextInput
        placeholder="Enter network"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        value={network}
        onChangeText={(text) => setNetwork(text)}
      />
         <View style={[styles.login, {borderRadius:25}]}> 
         <TouchableOpacity
         onPress={()=>{ navigation.navigate('Landing') }}
         >
          <Text style={[{fontSize:20, color:'white'}]}>Login</Text>
         </TouchableOpacity>
      </View>
    </View>


  
  )
};



export default Airtimeself

const styles = StyleSheet.create({
  login:{
    width:'100%',
    backgroundColor: '#e03a3c',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
})