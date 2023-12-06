const Tab = createBottomTabNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Dashboard from './Dashboard';
import User from './User';
import History from './History';

const Landing = () => {

        return (
            <Tab.Navigator>
            <Tab.Screen name="Home" component={Dashboard}  options={{ 
              headerShown: false, 
              tabBarIcon: ({ focused  }) => ( <AntDesign name="home" size={30} color={focused ? 'red' : 'grey'}  />
            ), }} 
            />
    
            <Tab.Screen name="User" component={User} options={{ 
              headerShown: true, 
              tabBarIcon: ({ focused  }) => ( <MaterialIcons name="history" size={30} color={focused ? 'red' : 'grey'}  />
            ), }} 
            />
    
    
            <Tab.Screen name="History" component={History}  options={{ 
              headerShown: true, 
              tabBarIcon: ({ focused  }) => ( <AntDesign name="user" size={24} color={focused ? 'red' : 'grey'}   />
            ), }} 
            />
            
            </Tab.Navigator>
          );
        
    }

export default Landing