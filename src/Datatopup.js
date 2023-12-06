import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';

const NetworkDropdown = ({navigation}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDataVisible, setDataVisible] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const networkOptions = ['MTN', 'Airtel', 'Glo', 'Etisalat'];
  const dataplanOptions = ['100GB for 60 days', '2GB for 1 week', '5GB for 1Month, 20GB for 2 Months'];

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const toggledataDropdown = () => {
    setDataVisible(!isDataVisible);
  };

  const selectNetwork = (network) => {
    setSelectedNetwork(network);
    setIsDropdownVisible(false);
  };
  const selectPlan = (plan) => {
    setSelectedPlan(plan);
    setDataVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginLeft:10, marginRight:10  }}>
      <View style={[styles.balance,{marginBottom:50}]}>
        <Text style={[{ color:'white', fontSize:20}]}> Your Wallet Balance = $50000</Text>
    </View>
      <Text>Select Network:</Text>
      <TouchableOpacity onPress={toggleDropdown} style={{ padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text>{selectedNetwork || 'Select a network'}</Text>
      </TouchableOpacity>

      <Modal visible={isDropdownVisible} transparent animationType="slide">
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => setIsDropdownVisible(false)}
            style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
          />
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            <FlatList
              data={networkOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectNetwork(item)} style={{ padding: 10 }}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* <Text>Selected Network: {selectedNetwork}</Text> */}

      {/* // select plan starts here */}
      <Text style={{marginTop:30}}>Select Dataplan:</Text>
      <TouchableOpacity onPress={toggledataDropdown} style={{ padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text>{selectedPlan || 'Select a Plan'}</Text>
      </TouchableOpacity>

      <Modal visible={isDataVisible} transparent animationType="slide">
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => setDataVisible(false)}
            style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
          />
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            <FlatList
              data={dataplanOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectPlan(item)} style={{ padding: 10 }}>
                  <Text>{item}</Text>
                </TouchableOpacity>  
              )}
            />
          </View>
        </View>
      </Modal>
      <View style={[styles.login, {borderRadius:25, marginTop:30}]}> 
       <TouchableOpacity
       onPress={()=>{ navigation.navigate('Landing') }}
       >
        <Text style={[{fontSize:20, color:'white'}]}>Send Now</Text>
       </TouchableOpacity>
    </View>

      {/* <Text>Selected Network: {selectedNetwork}</Text> */}
    </View>


    
    
  );
};

export default NetworkDropdown;

const styles = StyleSheet.create({
  login:{
      width:'100%',
      backgroundColor: '#e03a3c',
      height:60,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    balance:{
      display: 'flex',
      alignItems:'center',
      backgroundColor:'#e03a3c',
      padding:20,
    },
})
