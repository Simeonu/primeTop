import React from 'react'
import { StyleSheet, Text, View,Dimensions,SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Dashboard = ({ navigation }) => {
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

              <View style={[styles.balance,{marginTop:80}]}>
              <Text style={[{ color:'white', fontSize:20}]}> Your Wallet Balance = $50000</Text>
              </View>

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