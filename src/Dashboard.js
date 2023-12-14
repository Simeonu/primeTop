import React, { useState } from 'react'
import { StyleSheet, Text, View,Dimensions,SafeAreaView, Pressable, Modal, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {FlutterwaveButton, FlutterwaveInit, PayWithFlutterwave} from 'flutterwave-react-native';


const Dashboard = ({ navigation }) => {
  const [isShowing, setShowing] = useState(false);
  const [amount, setAmount] = useState(2000);

  const formatAmout = ( amount )=>{
          return amount.toLocaleString('en-US');
  }

  const handleOnRedirect = (ref) => {
    console.log(ref);
    if(ref.status === 'successful'){
            
      fetch("http://192.168.43.247/prime_top_api/fundwallet/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 2,  
          amount: amount,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(JSON.stringify(responseData));
        });



    }else{
      Alert.alert(
        'Failed',
        'Account Funding Failed',
        
      )
    }

 }

 const generateRef = (length) => {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];  
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

  const FundAccount =  ()=>(
    <PayWithFlutterwave
        onRedirect={handleOnRedirect}
        options={{
            tx_ref: generateRef(11),
            authorization: 'FLWPUBK_TEST-b1bba9b145e63ccfe85822d712b3f359-X',
            customer: {
                email: 'user@gmail.com'
            },
            amount: amount,
            currency: 'NGN',
            payment_options: 'card,ussd'
          }}
   />
  )
  const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];
  return (
    <SafeAreaView style={{flex:1, height:height,  width:width, backgroundColor:'#fff',}}>

      <View style={styles.container}>

              <View style={styles.welcome}>
                <View  style={[styles.welcome_text,{width:'50%', height:60, marginLeft:10}]}>
                  <TouchableOpacity
                   onPress={()=>{ navigation.navigate('Login') }} 
                  >
                      <AntDesign name="arrowleft" size={30} color="black" />
                  </TouchableOpacity>

                      <Text style={[{ color:'white', fontSize:20, marginLeft:10}]}>Welcome Simeon</Text>
                </View>

                   <Entypo name="dots-three-vertical" size={24} color="black" />
             

              </View>

              <View style={[styles.balance,{marginTop:1, height:80, flexDirection:'row', justifyContent:'space-between',alignItems:'center'}]}>
                   <View>
                        <Text style={[{ color:'white', fontSize:14,fontWeight:'bold'}]}>Wallet Balance </Text>
                        <Text style={[{ color:'white', fontSize:18}]}>&#x20A6;{formatAmout(50000)}</Text>
                   </View>
                    
                    <Pressable> 
                           <FundAccount />
                    </Pressable>
              </View> 

              <Modal visible ={isShowing}>

              </Modal>
             


              {/* top up container starts here */}

              <View style={styles.topup_container}>
                
                
                 <View style={[styles.topup]}>
                 <TouchableOpacity
                  onPress={()=>{ navigation.navigate('Airtimeself') }} 
                 >
                      <Text  style={[{color:'white'}]}>Airtime Self</Text>
                 </TouchableOpacity>
                  </View>

                 <View style={[styles.topup]}>
                 <TouchableOpacity
                   onPress={()=>{ navigation.navigate('Airtimeothers') }} 
                 >
                      <Text style={[{color:'white'}]}>Airtime Others</Text>
                 </TouchableOpacity>
                  </View>

                  <View style={[styles.topup]}>
                    <TouchableOpacity
                     onPress={()=>{ navigation.navigate('Datatopup') }} 
                    >

                      <Text style={[{color:'white'}]}>Data Topup</Text>
                    </TouchableOpacity>
                  </View>
              </View>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: 'center',
        alignContent: 'center',
        // flexDirection:'column',
        marginTop:30,
        paddingBottom:60,
        paddingTop:20,
      },

      welcome_text:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
      },
    
      welcome:{
        backgroundColor:'#ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
      },
    
      balance:{
        display: 'flex',
        alignItems:'center',
        backgroundColor:'#e03a3c',
        padding:20,
      },
    
      topup_container:{
        display: 'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        // justifyContent:'center',
        marginTop:150,
      },
    
      topup:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width: '30%',
        backgroundColor:'gray',
        height:80,
      
      },

})