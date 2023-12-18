import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack  = createStackNavigator();


import HomeScreen from './src/HomeScreen';
import Create_account from './src/Create_account';
import Login from './src/Login';
import ForgotPasswordScreen from './src/Forgot_password';
import Dashboard from './src/Dashboard';
import Landing from './src/Landing';
import User from './src/User';
import History from './src/History';
import Airtimeself from './src/Airtimeself';
import Airtimeothers from './src/Airtimeothers';
import Datatopup from './src/Datatopup';


import { Provider } from 'react-redux';
import { store } from './Store';


export default function App() {
  return (
    <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name='Home'   component={HomeScreen} options={{ headerShown:false}}/>
                    <Stack.Screen name='Create_account' component={Create_account} />
                    <Stack.Screen name='Login'  component={Login}  options={{ headerShown:true}} />
                    <Stack.Screen name='ForgotPasswordScreen'  component={ForgotPasswordScreen}  options={{ headerShown:false}} />
                    <Stack.Screen name='Dashboard'  component={Dashboard}  options={{ headerShown:false}} />
                    <Stack.Screen name='Landing'  component={Landing}  options={{ headerShown:false}} />
                    <Stack.Screen name='User'  component={User}  options={{ headerShown:true}} />
                    <Stack.Screen name='History'  component={History}  options={{ headerShown:true}} />
                    <Stack.Screen name='Airtimeself'  component={Airtimeself}  options={{ headerShown:true}} />
                    <Stack.Screen name='Airtimeothers'  component={Airtimeothers}  options={{ headerShown:true}} />
                    <Stack.Screen name='Datatopup'  component={Datatopup}  options={{ headerShown:true}} />
              </Stack.Navigator>
          </NavigationContainer>
    </Provider>

  );
}

